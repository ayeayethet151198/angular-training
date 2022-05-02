import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day10UserListComponent } from './day10-user-list.component';

describe('Day10UserListComponent', () => {
  let component: Day10UserListComponent;
  let fixture: ComponentFixture<Day10UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day10UserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day10UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
