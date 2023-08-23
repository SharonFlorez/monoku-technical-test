import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { OpenaiService } from 'src/services/openai.service';
import { MOODS } from '../core/constant/mood-constant';

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
    private openaiService: OpenaiService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.moodForm = this._formBuilder.group({
      mood: ['', [Validators.required]],
      journalEntry: ['', [Validators.maxLength(20)]],
    });
  }

  public getEmoji(mood: string): string {
    switch (mood) {
      case 'happy':
        return '😄';
      case 'good':
        return '😊';
      case 'neutral':
        return '😐';
      case 'bad':
        return '😞';
      case 'awful':
        return '😢';
      default:
        return '';
    }
  }

  public getSelectedMood(selectedMood: string): void {
    this.selectedMood = selectedMood;
  }

  public async onSave(): Promise<void> {
    const selectedMood = this.moodForm.value.mood;
    const journalEntry = this.moodForm.value.journalEntry;

    if (this.moodForm.controls['mood'].invalid) {
      Swal.fire('No has seleccionado tu estado de ánimo');
      return;
    }

    try {
      const sentiment = await this.openaiService.analyzeSentiment(journalEntry);
      this.sentimentResult = sentiment;

      Swal.fire({
        title: `Hoy te sientes ${this.getEmoji(selectedMood)}`,
        text: `Análisis: ${this.sentimentResult}`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Registro guardado!', '', 'success');
        } else if (result.isDenied) {
          Swal.fire('No se guardo el registro', '', 'info');
        }
      });
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  }
}
