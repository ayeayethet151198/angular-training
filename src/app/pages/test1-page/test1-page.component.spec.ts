import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1PageComponent } from './test1-page.component';

describe('Test1PageComponent', () => {
  let component: Test1PageComponent;
  let fixture: ComponentFixture<Test1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
