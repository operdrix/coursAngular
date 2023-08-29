import { Component } from '@angular/core';
import {Task, TaskStatus} from '../model/Task.model';
import { TaskList } from '../model/TaskList.model';
import {CRUDTaskListService} from "../crudtask-list.service";
import {ByStatusTaskListService} from "../by-status-task-list.service";

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {

  tasks!: TaskList;
  archivedTasks!: Task[]

  constructor( private tls: CRUDTaskListService, private byStatus: ByStatusTaskListService ) {
    this.tasks = tls.getTaskList()
    this.archivedTasks = byStatus.getTasksByStatus(TaskStatus.TERMINEE)
  }
}
