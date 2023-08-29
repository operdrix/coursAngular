import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainTaskComponent} from "./components/main-task/main-task.component";

const routes: Routes = [
  { path: '', component: MainTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
