import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatChip} from '@angular/material/chips';
import {NgClass} from '@angular/common';
import {Task} from '../../features/tasks/TaskModel';
import {TaskService} from '../../features/tasks/TaskService';
import {map, Observable} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {AddTaskDialogComponent} from '../../add-task-dialog/add-task-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    MatButton,
    MatDivider,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatChip,
    NgClass,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    FormsModule
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor( private taskService: TaskService,public dialog: MatDialog) {
  }
  selectedStatus: string[] = [];
  // @ts-ignore
  tasks$: Observable<Task[]> ;

  onStatusChange(status: string[]) {
    this.selectedStatus = status;
    if (status.length > 0) {
      this.tasks$ = this.taskService.getTasks().pipe(
        map(tasks => tasks.filter(task => status.includes(task.status)))
      );
    } else {
      // @ts-ignore
      this.tasks$ = null;
    }
  }

  ngOnInit() {
    const newTask: Task = new Task(
      1,
      'Complete Project',
      'Finish the task manager project by the end of the week',
      'TO_DO',
      '2025-04-05T12:00:00'
    );
    const task1: Task = new Task(
      2,
      'Write Blog Post',
      'Write a blog post about Angular state management and publish it by next week',
      'IN_PROGRESS',
      '2025-04-04T14:00:00'
    );
    const task3: Task = new Task(
      4,
      'Prepare Presentation',
      'Prepare a presentation for the upcoming team meeting on project progress',
      'DONE',
      '2025-04-03T17:00:00'
    );
    const task4: Task = new Task(
      5,
      'Research New Technologies',
      'Research the latest trends in AI and machine learning',
      'TO_DO',
      '2025-04-05T12:00:00'
    );
    const task5: Task = new Task(
      6,
      'Clean Desk',
      'Clean and organize the work desk to increase productivity',
      'DONE',
      '2025-04-02T10:30:00'
    );
    const task6: Task = new Task(
      7,
      'Team Meeting',
      'Attend the weekly team meeting to discuss project updates',
      'IN_PROGRESS',
      '2025-04-05T11:00:00'
    );
    this.taskService.addTask(newTask);
    this.taskService.addTask(task1);
    this.taskService.addTask(task3);
    this.taskService.addTask(task4);
    this.taskService.addTask(task5);
    this.taskService.addTask(task6);

    this.selectedStatus = [...this.selectedStatus,"TO_DO"];
    this.onStatusChange(this.selectedStatus);

  }
  displayedColumns: string[] = ['id', 'Title', 'Description', 'createdAt', 'Status'];
  getStatusClass(status: string) {
    switch(status) {
      case 'TO_DO':
        return 'status-todo';
      case 'IN_PROGRESS':
        return 'status-in-progress';
      case 'DONE':
        return 'status-done';
      default:
        return '';
    }
  }
  onRowClicked(row: Task) {
    const task = new Task(row.id,row.title,row.description,row.createdAt,row.status);

  }
  openAddTaskDialog(){
    this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
    });
  }
}
