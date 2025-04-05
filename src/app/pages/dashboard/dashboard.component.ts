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
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatChip} from '@angular/material/chips';
import {NgClass} from '@angular/common';
import {Task} from '../../features/tasks/TaskModel';
import {TaskService} from '../../features/tasks/TaskService';
import {map, Observable, of} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {AddTaskDialogComponent} from '../../add-task-dialog/add-task-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TaskModalComponent} from '../../task-modal/task-modal.component';
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
  tasks: Task[] = [];
  selectedTask: Task | null = null;
  selectedStatus: string[] = [];
  // @ts-ignore
  tasks$: Observable<Task[]> ;
  async changeUI(){
    this.onStatusChange(this.selectedStatus);
  }
  async onStatusChange(status: string[]) {
    this.selectedStatus = status;
    if (status.length > 0) {
      const observable = await this.taskService.getTasks();
      if (observable) {
        this.tasks$ = observable.pipe(
          map(tasks => tasks.filter(task => status.includes(task.status)))
        );
      } else {
        this.tasks$ = of([]);
      }
    } else {
      this.tasks$ = of([]);
    }
  }


  ngOnInit() {
    // @ts-ignore
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
    this.taskService.getChangeUIObservable().subscribe(() => {
      this.changeUI();
    });
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
    this.selectedTask = new Task(row.id, row.title, row.description, row.status, row.createdAt,row.user_id);
    console.log(this.selectedTask);
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: this.selectedTask,
      panelClass: 'custom-dialog-container'
    });
  }
  openAddTaskDialog(){
    this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
    });
  }
}
