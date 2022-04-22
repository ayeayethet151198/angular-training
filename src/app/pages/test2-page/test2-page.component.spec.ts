import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2PageComponent } from './test2-page.component';

describe('Test2PageComponent', () => {
  let component: Test2PageComponent;
  let fixture: ComponentFixture<Test2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
