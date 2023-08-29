import { Component } from '@angular/core';
import {Task, TaskStatus} from '../model/Task.model';
import { TaskList } from '../model/TaskList.model';
import {TaskFacadeService} from "../services/task-facade.service";

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {

  tasks!: TaskList;
  archivedTasks!: Task[]

  constructor( private taskService: TaskFacadeService ) {
    this.tasks = taskService.getTaskList()
    this.archivedTasks = taskService.getTasksByStatus(TaskStatus.TERMINEE)
  }
}
