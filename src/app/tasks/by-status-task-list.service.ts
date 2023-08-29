import {Injectable} from '@angular/core';
import {CRUDTaskListService} from "./crudtask-list.service";
import {Task, TaskStatus} from "./model/Task.model";
import {ByStatusTaskListInterface} from "./by-status-task-list.interface";

@Injectable({
  providedIn: 'root'
})
export class ByStatusTaskListService extends CRUDTaskListService implements ByStatusTaskListInterface {

  public getTasksByStatus(status: TaskStatus): Task[] {
    return this.getTasks().filter(task => task.status === status);
  }

}
