import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MainAddTaskFormComponent} from "./components/main-add-task-form/main-add-task-form.component";
import {AddTaskFormRoutingModule} from "./add-tasks-form-routing.module";



@NgModule({
  declarations: [
    AddTaskFormComponent,
    MainAddTaskFormComponent
  ],
  exports: [
    AddTaskFormComponent,
    MainAddTaskFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddTaskFormRoutingModule
  ]
})
export class AddTaskFormModule { }
