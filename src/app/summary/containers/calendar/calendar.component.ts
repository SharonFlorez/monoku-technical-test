import { Component, Input, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';

import { MoodRegister } from 'src/app/core/interfaces/mood-register.interface';
import { GetMoodHelper } from 'src/app/core/helpers/mood-emoji.helper';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() public moodEntries: MoodRegister[] = [];
  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [],
  };

  ngOnInit(): void {
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
  }
}
