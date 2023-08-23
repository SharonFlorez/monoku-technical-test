import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';

import { MoodRegisterService } from 'src/services/mood-register.service';
import { MoodRegister } from 'src/app/core/interfaces/mood-register.interface';
import { timestamp } from 'rxjs';
import { GetMoodHelper } from 'src/app/core/helpers/mood-emoji.helper';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  public moodEntries: MoodRegister[] = [];
  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [],
  };

  constructor(private _moodRegister: MoodRegisterService) {}

  ngOnInit(): void {
    this._moodRegister.getMoods().subscribe((entries) => {
      this.moodEntries = entries;
      this.calendarOptions.events = this.moodEntries.map((entry) => {
        const timestamp = entry.date;
        const date = new Date(
          timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
        );
        const formattedDate = date.toISOString().split('T')[0];

        return {
          title: GetMoodHelper.getEmoji(entry.mood),
          date: formattedDate,
        };
      });
    });
  }
}
