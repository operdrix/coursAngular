import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Task} from "./tasks/model/Task.model";
import {TasksModule} from "./tasks/tasks.module";
import { MainAddTaskFormComponent } from './add-task-form/components/main-add-task-form/main-add-task-form.component';
import {AddTaskFormModule} from "./add-task-form/add-task-form.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    AddTaskFormModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
