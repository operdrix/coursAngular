import { Component } from '@angular/core';
import { Task, TaskStatus } from '../model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  task!: Task;
  constructor() {
    this.task.title = "title";
    this.task.description = "description";
    this.task.status = TaskStatus.A_FAIRE;
  }

}
