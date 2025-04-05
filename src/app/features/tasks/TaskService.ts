import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { Task } from './TaskModel';
import Api_Call from '../Api.calls';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$:Observable<Task[]> | null = this.tasksSubject.asObservable();
  private changeUISubject = new Subject<void>();

  constructor() {}

  async getTasks() {
    this.tasks$ = await Api_Call.getTasks(1);
    return this.tasks$
  }
  async addTask(task: Task) {
    const savedTask = await Api_Call.saveTask(task);
    const updatedTasks = [...this.tasksSubject.value, savedTask];
    this.tasksSubject.next(updatedTasks);
    this.notifyChangeUI()
  }
  async updateTask(updatedTask: Task) {
    const updatedTaskDB = await Api_Call.updateTask(updatedTask);
    const tasks = this.tasksSubject.value.map(task =>
      task.id === updatedTaskDB.id ? updatedTaskDB : task
    );
    this.tasksSubject.next(tasks);
    this.notifyChangeUI()
  }
  async deleteTask(id: number) {
    await Api_Call.deleteTask(id);
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
    this.notifyChangeUI()
  }
  notifyChangeUI() {
    this.changeUISubject.next();
  }
  getChangeUIObservable(): Observable<void> {
    return this.changeUISubject.asObservable();
  }
}
