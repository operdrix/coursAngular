import { Component } from '@angular/core';
import {TaskFacadeService} from "../../../tasks/services/task-facade.service";
import {Task} from "../../../tasks/model/Task.model";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.scss']
})
export class MainAddTaskFormComponent {

  constructor(private taskService: TaskFacadeService) {
  }

  handleSubmit(task:Task) {
    this.taskService.addTask(task);
  }
}
