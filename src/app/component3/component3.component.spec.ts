import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3} from './component3.component';

describe('Component3', () => {
  let component: Component3;
  let fixture: ComponentFixture<Component3>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component3]
    });
    fixture = TestBed.createComponent(Component3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
