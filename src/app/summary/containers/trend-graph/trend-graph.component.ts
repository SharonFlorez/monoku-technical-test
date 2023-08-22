import { Component, OnInit } from '@angular/core';

import { ChartConfiguration } from 'chart.js';
import { MoodEntry } from 'src/app/core/model/mood-entry';
import { MoodEntryService } from 'src/services/mood-entry.service';

@Component({
  selector: 'app-trend-graph',
  templateUrl: './trend-graph.component.html',
  styleUrls: ['./trend-graph.component.scss'],
})
export class TrendGraphComponent implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['😄', '😊', '😐', '😞', '😢'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Moods trends',
        backgroundColor: '#37acf5',
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  // moodEntries: MoodEntry[] = [];
  // lineChartData: ChartDataset[] = [];
  // lineChartLabels: string[] = [];

  // lineChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: {
  //     x: {
  //       type: 'time',
  //       time: {
  //         unit: 'day',
  //       },
  //     },
  //   },
  // };

  // lineChartType: ChartType = 'line';
  // lineChartLegend = true;

  // constructor(private moodEntryService: MoodEntryService) {}

  ngOnInit(): void {
    // Fetch mood entries and update the chart data
    // this.moodEntryService.getMoodEntries().subscribe(entries => {
    //   this.moodEntries = entries;
    //   this.lineChartData = [
    //     {
    //       data: entries.map(entry => ({ x: entry.date, y: entry.moodValue })),
    //       label: 'Mood Trend'
    //     }
    //   ];
    //   this.lineChartLabels = entries.map(entry => entry.date.toISOString());
    // });
  }
}
