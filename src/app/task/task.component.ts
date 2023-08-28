import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;
  constructor() {
  }

}
