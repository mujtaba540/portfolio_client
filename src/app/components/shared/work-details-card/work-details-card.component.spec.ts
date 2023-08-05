import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailsCardComponent } from './work-details-card.component';

describe('WorkDetailsCardComponent', () => {
  let component: WorkDetailsCardComponent;
  let fixture: ComponentFixture<WorkDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkDetailsCardComponent]
    });
    fixture = TestBed.createComponent(WorkDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
