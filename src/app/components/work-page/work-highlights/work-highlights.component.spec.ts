import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHighlightsComponent } from './work-highlights.component';

describe('WorkHighlightsComponent', () => {
  let component: WorkHighlightsComponent;
  let fixture: ComponentFixture<WorkHighlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkHighlightsComponent]
    });
    fixture = TestBed.createComponent(WorkHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
