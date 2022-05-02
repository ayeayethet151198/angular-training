import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day10UserRegistrationComponent } from './day10-user-registration.component';

describe('Day10UserRegistrationComponent', () => {
  let component: Day10UserRegistrationComponent;
  let fixture: ComponentFixture<Day10UserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day10UserRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day10UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
