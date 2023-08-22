import { NgModule } from '@angular/core';
import { CalendarComponent, TrendGraphComponent } from './containers';
import { SummaryComponent } from './components/summary.component';

import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [CalendarComponent, SummaryComponent, TrendGraphComponent],
  imports: [FullCalendarModule],
  exports: [CalendarComponent, SummaryComponent, TrendGraphComponent],
})
export class SummaryModule {}
