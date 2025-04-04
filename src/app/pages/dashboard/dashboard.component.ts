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
  dataSource = [
    { id: 1, title: 'Task 1', description: 'Description 1', createdAt: '2025-04-05', status: 'TO_DO' },
    { id: 2, title: 'Task 2', description: 'Description 2', createdAt: '2025-04-06', status: 'IN_PROGRESS' },
    { id: 3, title: 'Task 3', description: 'Description 3', createdAt: '2025-04-07', status: 'DONE' },
  ];

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
