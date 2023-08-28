import { Component } from '@angular/core';
import { TaskStatus } from '../model/Task.model';
import { TaskList } from '../model/TaskList.model';
import {CRUDTaskListService} from "../crudtask-list.service";

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {

  tasks!: TaskList;

  constructor( private tls: CRUDTaskListService ) {
    this.tasks = tls.getTasks()
  }
}
