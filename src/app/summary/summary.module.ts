import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgChartsModule } from 'ng2-charts';

import { CalendarComponent, TrendGraphComponent } from './containers';
import { SummaryComponent } from './components/summary.component';
import { LoadingComponent } from '../loading/loading.component';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [
    CalendarComponent,
    SummaryComponent,
    TrendGraphComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, FullCalendarModule, NgChartsModule, MaterialModule],
  exports: [CalendarComponent, SummaryComponent, TrendGraphComponent],
})
export class SummaryModule {}
