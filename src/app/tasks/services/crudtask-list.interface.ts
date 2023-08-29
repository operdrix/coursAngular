import {Task} from "../model/Task.model";
import {TaskList} from "../model/TaskList.model";
import {Observable} from "rxjs";

export interface CRUDTaskListInterface {

  getTaskList(): Observable<TaskList>
  getTasks(): Observable<Task[]>
  getTask(id:string): Observable<Task | undefined>
  addTask(task: Task): void
  deleteTask(task: Task): void
  updateTask(task: Task): void
}
