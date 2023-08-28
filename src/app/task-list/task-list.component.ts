import { Component, Input } from '@angular/core';
import { TaskList } from '../model/TaskList.model';
import { Task, TaskStatus } from '../model/Task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks!: TaskList;
  constructor() {
  }
}
