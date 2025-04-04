import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../features/tasks/TaskModel';
import {FormsModule} from '@angular/forms';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.component.html',
  styleUrls: ['./task-modal.component.component.css'],
  imports: [
    FormsModule,
    MatSelect,
    MatOption,
    MatButton,
    NgIf
  ],
  standalone: true
})
export class TaskModalComponent {
  isEditingTitle = false;
  isEditingDescription = false;

  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  saveTask(): void {
    console.log('Updated Task:', this.task);
    this.dialogRef.close(this.task);
  }
}
