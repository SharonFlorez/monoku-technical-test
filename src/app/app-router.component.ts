import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  template: `
    <app-layout>
      <div class="component-container" id="scroll">
        <router-outlet></router-outlet>
      </div>
    </app-layout>
  `,
  styles: [
    `
      .component-container {
        overflow-y: auto;
      }
    `,
  ],
})
export class AppRouterComponent {
  constructor() {}
}
