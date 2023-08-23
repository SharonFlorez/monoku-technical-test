import { Component, OnInit } from '@angular/core';

import { MoodRegisterService } from 'src/services/mood-register.service';
import { MoodCounts, MoodRegister } from 'src/app/core/interfaces';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  public moodEntries: MoodRegister[] = [];
  public moodCounts: number[] = [];
  public loading = true;

  constructor(private _moodRegister: MoodRegisterService) {}

  ngOnInit(): void {
    this._moodRegister.getMoods().subscribe((entries) => {
      if (entries) {
        this.moodEntries = entries;

        this.getMoodCounts();
      }
      this.loading = false;
    });
  }

  public getMoodCounts(): void {
    const moodCounts: MoodCounts = {
      happy: 0,
      good: 0,
      neutral: 0,
      bad: 0,
      awful: 0,
    };

    for (const entry of this.moodEntries) {
      moodCounts[entry.mood]++;
    }

    this.moodCounts = [
      moodCounts['happy'],
      moodCounts['good'],
      moodCounts['neutral'],
      moodCounts['bad'],
      moodCounts['awful'],
    ];
  }
}
