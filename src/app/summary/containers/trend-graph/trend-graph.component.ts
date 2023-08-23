import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-trend-graph',
  templateUrl: './trend-graph.component.html',
  styleUrls: ['./trend-graph.component.scss'],
})
export class TrendGraphComponent implements OnInit {
  @Input() public moodCounts: number[] = [];
  public barChartConfig!: any;
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  ngOnInit(): void {
    this.barChartConfig = {
      chartData: [
        {
          data: this.moodCounts,
          label: 'Moods trends',
          backgroundColor: '#37acf5',
        },
      ],
      chartLabels: ['😄', '😊', '😐', '😞', '😢'],
    };
  }
}
