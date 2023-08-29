import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainAddTaskFormComponent} from "./components/main-add-task-form/main-add-task-form.component";

const routes: Routes = [
  { path: '', component: MainAddTaskFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTaskFormRoutingModule { }
