import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSample } from './check-sample';

describe('CheckSample', () => {
  let component: CheckSample;
  let fixture: ComponentFixture<CheckSample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckSample],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckSample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
