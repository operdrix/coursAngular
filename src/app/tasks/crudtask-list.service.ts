import { Injectable } from '@angular/core';
import {TaskList} from "./model/TaskList.model";
import {Task, TaskStatus} from "./model/Task.model";

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService {

  private tasks = new TaskList(
    [
      {
        title: "tâche 1", description: "description tâche 1", status: TaskStatus.A_FAIRE, createdAt: new Date()
      },
      {
        title: "tâche 2", description: "description tâche 2", status: TaskStatus.A_FAIRE, createdAt: new Date()
      },
      {
        title: "tâche 3", description: "description tâche 3", status: TaskStatus.EN_COURS, createdAt: new Date()
      }
    ]
  );

  public getTasks(): TaskList {
    return this.tasks;
  }
  public getTask(): TaskList {
    return this.tasks;
  }

  public addTask(task: Task): void {
    this.tasks.tasks.push(task);
  }

  public deleteTask(task: Task): void {
    this.tasks.tasks.splice(this.tasks.tasks.indexOf(task), 1);
  }

  public updateTask(task: Task): void {
    this.tasks.tasks[this.tasks.tasks.indexOf(task)] = task;
  }
}
