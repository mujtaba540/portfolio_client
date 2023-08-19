import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailsPageComponent } from './work-details-page.component';

describe('WorkDetailsPageComponent', () => {
  let component: WorkDetailsPageComponent;
  let fixture: ComponentFixture<WorkDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkDetailsPageComponent]
    });
    fixture = TestBed.createComponent(WorkDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
