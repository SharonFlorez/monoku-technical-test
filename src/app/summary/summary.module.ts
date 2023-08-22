import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgChartsModule } from 'ng2-charts';

import { CalendarComponent, TrendGraphComponent } from './containers';
import { SummaryComponent } from './components/summary.component';

@NgModule({
  declarations: [CalendarComponent, SummaryComponent, TrendGraphComponent],
  imports: [FullCalendarModule, NgChartsModule],
  exports: [CalendarComponent, SummaryComponent, TrendGraphComponent],
})
export class SummaryModule {}
