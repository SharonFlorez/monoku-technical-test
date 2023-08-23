import { Component, OnInit } from '@angular/core';

import { ChartConfiguration } from 'chart.js';

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

  constructor() {}

  ngOnInit(): void {}
}
