import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2 } from './component2.component';

describe('Component2', () => {
  let component: Component2;
  let fixture: ComponentFixture<Component2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component2]
    });
    fixture = TestBed.createComponent(Component2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
