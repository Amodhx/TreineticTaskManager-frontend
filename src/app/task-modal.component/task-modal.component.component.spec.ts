import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModalComponentComponent } from './task-modal.component.component';

describe('TaskModalComponentComponent', () => {
  let component: TaskModalComponentComponent;
  let fixture: ComponentFixture<TaskModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskModalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
