import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDescriptionComponent } from './work-description.component';

describe('WorkDescriptionComponent', () => {
  let component: WorkDescriptionComponent;
  let fixture: ComponentFixture<WorkDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkDescriptionComponent]
    });
    fixture = TestBed.createComponent(WorkDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
