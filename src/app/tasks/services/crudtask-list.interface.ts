import {Task} from "../model/Task.model";
import {TaskList} from "../model/TaskList.model";

export interface CRUDTaskListInterface {

  getTaskList(): TaskList
  getTasks(): Task[]
  getTask(id:string): Task | undefined
  addTask(task: Task): void
  deleteTask(task: Task): void
  updateTask(task: Task): void
}
