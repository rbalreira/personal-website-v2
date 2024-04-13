import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLangsComponent } from './dropdown-langs.component';

describe('DropdownLangsComponent', () => {
  let component: DropdownLangsComponent;
  let fixture: ComponentFixture<DropdownLangsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownLangsComponent],
    });
    fixture = TestBed.createComponent(DropdownLangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
