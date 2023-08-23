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
  public isDesktop = true;
  public active = '';
  public isLogin = false;

  constructor(private _router: Router) {
    this._router.events.pipe().subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        this._setSelectedOption(event.url);
        this.isLogin =
          event.url.includes('inicio') || event.url.includes('resumen');
      }
    });
  }

  @HostListener('window:resize', [])
  updateisDesktop() {
    const width = document.documentElement.clientWidth || window.innerWidth;
    const breakpoint = 1024;

    this.isDesktop = width >= breakpoint;
  }

  ngOnInit(): void {
    this.updateisDesktop();
  }

  private _setSelectedOption(currentPath: string): void {
    if (!currentPath.includes('resumen')) {
      this.active = 'inicio';
    } else if (currentPath.includes('resumen')) {
      this.active = 'resumen';
    }
  }
}
