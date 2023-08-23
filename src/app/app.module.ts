import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { OpenaiService } from 'src/services/openai.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { SummaryModule } from './summary/summary.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRouterComponent } from './app-router.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MoodSelectorComponent,
    LayoutComponent,
    NavigationMenuComponent,
    AppRouterComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SummaryModule,
    NgChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  providers: [OpenaiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
