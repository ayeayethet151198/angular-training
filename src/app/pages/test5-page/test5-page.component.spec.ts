import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test5PageComponent } from './test5-page.component';

describe('Test5PageComponent', () => {
  let component: Test5PageComponent;
  let fixture: ComponentFixture<Test5PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test5PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test5PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
