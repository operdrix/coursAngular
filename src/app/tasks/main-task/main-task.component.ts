import { Component } from '@angular/core';
import { TaskStatus } from '../model/Task.model';
import { TaskList } from '../model/TaskList.model';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {
  tasks!: TaskList;

  constructor() {
    const newDate = new Date();
    this.tasks = new TaskList(
      [
        {
          title: "tâche 1", description: "description tâche 1", status: TaskStatus.A_FAIRE, createdAt: newDate
        },
        {
          title: "tâche 2", description: "description tâche 2", status: TaskStatus.A_FAIRE, createdAt: newDate
        },
        {
          title: "tâche 3", description: "description tâche 3", status: TaskStatus.EN_COURS, createdAt: newDate
        }
      ]
    );
  }
}
