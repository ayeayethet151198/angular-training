import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test4PageComponent } from './test4-page.component';

describe('Test4PageComponent', () => {
  let component: Test4PageComponent;
  let fixture: ComponentFixture<Test4PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test4PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
