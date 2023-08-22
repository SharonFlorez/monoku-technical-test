import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OpenaiService } from 'src/services/openai.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { SummaryModule } from './summary/summary.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRouterComponent } from './app-router.component';

@NgModule({
  declarations: [
    AppComponent,
    MoodSelectorComponent,
    LayoutComponent,
    NavigationMenuComponent,
    AppRouterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    SummaryModule,
  ],
  providers: [OpenaiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
