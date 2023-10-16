import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1 } from './component1.component';

describe('Component1', () => {
  let component: Component1;
  let fixture: ComponentFixture<Component1>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component1]
    });
    fixture = TestBed.createComponent(Component1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
