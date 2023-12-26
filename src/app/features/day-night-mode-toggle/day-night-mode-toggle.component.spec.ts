import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNightModeToggleComponent } from './components/day-night-mode-toggle.component';

describe('DayNightToggleSwitchComponent', () => {
  let component: DayNightModeToggleComponent;
  let fixture: ComponentFixture<DayNightModeToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayNightModeToggleComponent],
    });
    fixture = TestBed.createComponent(DayNightModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
