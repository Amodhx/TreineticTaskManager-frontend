import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './TaskModel';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  getTasks() {
    return this.tasks$;
  }
  addTask(task: Task) {
    this.tasksSubject.next([...this.tasksSubject.value, task]);
  }
  updateTask(updatedTask: Task) {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSubject.next(tasks);
  }
  deleteTask(id: number) {
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
  }
}
