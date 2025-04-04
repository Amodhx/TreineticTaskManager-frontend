import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TaskService} from '../features/tasks/TaskService';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatDialogActions,
    MatButton,
    MatDialogTitle,
    NgIf,
    MatError,
    MatLabel
  ],
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddTaskDialogComponent>,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = { ...this.taskForm.value, createdAt: new Date().toISOString() };
      this.taskService.addTask(newTask);
      this.dialogRef.close();
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
