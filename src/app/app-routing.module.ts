import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { SummaryComponent } from './summary/components/summary.component';
import { AppRouterComponent } from './app-router.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppRouterComponent,
    children: [
      { path: '', title: 'Login', component: LoginComponent },
      {
        path: 'inicio',
        title: 'Inicio',
        component: MoodSelectorComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/'])),
      },
      {
        path: 'resumen',
        title: 'Resumen',
        component: SummaryComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/'])),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
