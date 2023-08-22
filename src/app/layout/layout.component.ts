import { Component, HostListener, OnInit } from '@angular/core';
import {
  Router,
  Event as NavigationEvent,
  NavigationEnd,
} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public isMobile = true;
  public isDrawerOpen = false;
  public active = '';

  constructor(private _router: Router) {
    this._router.events.pipe().subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        this._setTitle(event.url);
      }
    });
  }

  @HostListener('window:resize', [])
  updateIsMobile() {
    const width = document.documentElement.clientWidth || window.innerWidth;
    const breakpoint = 768;

    this.isMobile = width < breakpoint;
  }

  ngOnInit(): void {
    this.updateIsMobile();
  }

  private _setTitle(currentPath: string): void {
    if (!currentPath.includes('resumen')) {
      this.active = 'inicio';
    } else if (currentPath.includes('resumen')) {
      this.active = 'resumen';
    }
  }
}
