import { Component } from '@angular/core';
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
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

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
    MatRowDef
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor( private taskService: TaskService) {
  }
  // @ts-ignore
  tasks$: Observable<Task[]> ;


  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
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
  onRowClicked(row: any) {
    console.log('Row clicked:', row);
  }
}
