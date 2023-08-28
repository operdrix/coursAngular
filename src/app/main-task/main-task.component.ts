import { Component } from '@angular/core';
import { Task, TaskStatus } from '../model/task.model';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {
  task!: Task;
  constructor() {
    this.task = new Task("title", "description", TaskStatus.A_FAIRE);
  }
}
