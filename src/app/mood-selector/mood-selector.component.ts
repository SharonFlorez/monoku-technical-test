import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { OpenaiService } from 'src/services/openai.service';
import { MOODS } from '../core/constants/mood-constant';
import { MoodRegisterService } from 'src/services/mood-register.service';
import { MoodRegister } from '../core/interfaces/mood-register.interface';
import { Router } from '@angular/router';
import { GetMoodHelper } from '../core/helpers/mood-emoji.helper';

@Component({
  selector: 'app-mood-selector',
  templateUrl: './mood-selector.component.html',
  styleUrls: ['./mood-selector.component.scss'],
})
export class MoodSelectorComponent implements OnInit {
  public moodForm: FormGroup = new FormGroup({});
  public moods = MOODS;
  public selectedMood = '';
  public journalEntry = '';
  public sentimentResult = '';

  constructor(
    private _openaiService: OpenaiService,
    private _moodRegister: MoodRegisterService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.moodForm = this._formBuilder.group({
      mood: ['', [Validators.required]],
      date: [new Date()],
      journalEntry: ['', [Validators.maxLength(20)]],
    });
  }

  public getSelectedMood(selectedMood: string): void {
    this.selectedMood = selectedMood;
  }

  public async onSave(): Promise<void> {
    if (this.moodForm.controls['mood'].invalid) {
      Swal.fire('No has seleccionado tu estado de ánimo');
      return;
    }

    const moodRegister: MoodRegister = {
      date: this.moodForm.value.date,
      mood: this.moodForm.value.mood,
      journalEntry: this.moodForm.value.journalEntry,
    };

    try {
      const sentiment = await this._openaiService.analyzeSentiment(
        moodRegister.journalEntry
      );
      this.sentimentResult = sentiment;

      Swal.fire({
        title: `Hoy te sientes ${GetMoodHelper.getEmoji(moodRegister.mood)}`,
        text: this.sentimentResult,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await this._moodRegister.addMood(moodRegister);
          Swal.fire('Registro guardado!', '', 'success');
          response && this._router.navigate(['/resumen']);
        } else if (result.isDenied) {
          Swal.fire('No se guardo el registro', '', 'info');
        }
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
