import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskComponent} from "./task/task.component";
import {MainTaskComponent} from "./main-task/main-task.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {StatusColorDirective} from "./status-color.directive";
import {DateFormatPipe} from "../date-format.pipe";
import {TasksRoutingModule} from "./tasks-routing.module";
import {CRUDTaskListService} from "./services/crudtask-list.service";

@NgModule({
  declarations: [
    TaskComponent,
    MainTaskComponent,
    TaskListComponent,
    StatusColorDirective,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  providers: [
    CRUDTaskListService
  ]
})
export class TasksModule { }
