import { Component, Input } from '@angular/core';
import { TaskList } from '../model/TaskList.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasksList!: TaskList;
  constructor() {
  }
}
