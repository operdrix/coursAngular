import {Task, TaskStatus} from "./model/Task.model";
import {CRUDTaskListInterface} from "./crudtask-list.interface";


export interface ByStatusTaskListInterface extends CRUDTaskListInterface {

  getTasksByStatus(status: TaskStatus): Task[]

}
