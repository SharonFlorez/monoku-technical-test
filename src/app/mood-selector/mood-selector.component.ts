import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OpenaiService } from 'src/services/openai.service';

const MOODS = [
  { emoji: '😄', label: 'Happy', value: 'happy' },
  { emoji: '😊', label: 'Good', value: 'good' },
  { emoji: '😐', label: 'Neutral', value: 'neutral' },
  { emoji: '😞', label: 'Bad', value: 'bad' },
  { emoji: '😢', label: 'Awful', value: 'awful' },
];

@Component({
  selector: 'app-mood-selector',
  templateUrl: './mood-selector.component.html',
  styleUrls: ['./mood-selector.component.scss'],
})
export class MoodSelectorComponent {
  public moods = MOODS;
  public selectedMood = 'neutral';
  public journalEntry = '';
  public sentimentResult = '';

  constructor(private openaiService: OpenaiService, private router: Router) {}

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

  public async submitForSentimentAnalysis(
    selectedMood: string,
    journalEntry: string
  ): Promise<void> {
    try {
      const sentiment = await this.openaiService.analyzeSentiment(journalEntry);
      this.sentimentResult = sentiment;

      Swal.fire({
        title: `Hoy te sientes ${this.getEmoji(selectedMood)}`,
        text: `Análisis: ${this.sentimentResult}`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info');
        }
      });
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  }
}
