import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodSelectorComponent } from './mood-selector.component';

describe('MoodSelectorComponent', () => {
  let component: MoodSelectorComponent;
  let fixture: ComponentFixture<MoodSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodSelectorComponent]
    });
    fixture = TestBed.createComponent(MoodSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
