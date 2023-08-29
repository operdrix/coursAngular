import {Task, TaskStatus} from "../model/Task.model";
import {CRUDTaskListInterface} from "./crudtask-list.interface";
import {Observable} from "rxjs";


export interface ByStatusTaskListInterface extends CRUDTaskListInterface {

  getTasksByStatus(status: TaskStatus): Observable<Task[]>

}
