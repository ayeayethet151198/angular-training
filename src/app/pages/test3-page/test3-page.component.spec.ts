import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3PageComponent } from './test3-page.component';

describe('Test3PageComponent', () => {
  let component: Test3PageComponent;
  let fixture: ComponentFixture<Test3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test3PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
