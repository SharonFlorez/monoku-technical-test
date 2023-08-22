import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MoodEntry } from 'src/app/core/model/mood-entry';
import { MoodEntryService } from 'src/services/mood-entry.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  public moodEntries: MoodEntry[] = [];
  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [
      {
        title: '😐',
        date: new Date(),
      },
    ],
  };

  constructor(private moodEntryService: MoodEntryService) {}

  ngOnInit(): void {
    // this.moodEntryService.getMoodEntries().subscribe(entries => {
    //   this.moodEntries = entries;
    //   this.calendarOptions.events = entries.map(entry => ({
    //     title: entry.mood,
    //     date: entry.date
    //   }));
    // });
  }
}
