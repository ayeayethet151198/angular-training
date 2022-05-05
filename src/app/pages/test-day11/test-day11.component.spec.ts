import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDay11Component } from './test-day11.component';

describe('TestDay11Component', () => {
  let component: TestDay11Component;
  let fixture: ComponentFixture<TestDay11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDay11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDay11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
