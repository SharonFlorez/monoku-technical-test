import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { SummaryComponent } from './summary/components/summary.component';
import { AppRouterComponent } from './app-router.component';

const routes: Routes = [
  {
    path: '',
    component: AppRouterComponent,
    children: [
      { path: '', title: 'Inicio', component: MoodSelectorComponent },
      { path: 'resumen', title: 'Resumen', component: SummaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
