import {Injectable, Output} from '@angular/core';
import {Task, TaskStatus} from "../model/Task.model";
import {v4 as uuidv4} from 'uuid'
import {TaskList} from "../model/TaskList.model";
import {CRUDTaskListInterface} from "./crudtask-list.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskListInterface{

  protected tasks:Task[] =
    [
      {
        id: uuidv4(),
        title: "tâche 1",
        description: "description tâche 1",
        status: TaskStatus.A_FAIRE,
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        title: "tâche 2",
        description: "description tâche 2",
        status: TaskStatus.EN_COURS,
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        title: "tâche 3",
        description: "description tâche 3",
        status: TaskStatus.TERMINEE,
        createdAt: new Date()
      }
    ]

  public getTaskList(): Observable<TaskList> {
    return of(new TaskList(this.tasks));
  }
  public getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
  public getTask(id:string): Observable<Task | undefined> {
    return of(this.tasks.find(task => task.id === id))
  }
  public addTask(task: Task): void {
    this.tasks.push(task);
  }
  public deleteTask(task: Task): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  public updateTask(task: Task): void {
    this.tasks[this.tasks.indexOf(task)] = task;
  }
}
