import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLogoComponent } from './svg-logo.component';

describe('SvgLogoComponent', () => {
  let component: SvgLogoComponent;
  let fixture: ComponentFixture<SvgLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgLogoComponent]
    });
    fixture = TestBed.createComponent(SvgLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
