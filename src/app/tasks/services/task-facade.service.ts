import { Injectable } from '@angular/core';
import {ByStatusTaskListService} from "./by-status-task-list.service";
import {CRUDTaskListService} from "./crudtask-list.service";
import {Task, TaskStatus} from "../model/Task.model";
import {TaskList} from "../model/TaskList.model";

@Injectable({
  providedIn: 'root'
})
export class TaskFacadeService {

  constructor(private taskListService: CRUDTaskListService,
              private taskListByStatusService: ByStatusTaskListService) {
  }
  public getTasks() : Task[] {
    return this.taskListService.getTasks();
  }
  public getTaskList(): TaskList {
    return this.taskListService.getTaskList();
  }
  public getTask(id: string): Task | undefined {
    return this.taskListService.getTask(id);
  }
  public addTask(task: Task): void {
    this.taskListService.addTask(task);
  }
  public deleteTask(task: Task): void {
    this.taskListService.deleteTask(task);
  }
  public updateTask(task: Task): void {
    this.taskListService.updateTask(task);
  }
  public getTasksByStatus(status: TaskStatus): Task[] {
    return this.taskListByStatusService.getTasksByStatus(status);
  }
}
