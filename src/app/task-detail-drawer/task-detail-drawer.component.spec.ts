import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailDrawerComponent } from './task-detail-drawer.component';

describe('TaskDetailDrawerComponent', () => {
  let component: TaskDetailDrawerComponent;
  let fixture: ComponentFixture<TaskDetailDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
