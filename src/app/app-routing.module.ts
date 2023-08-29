import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'display', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)},
  { path: 'form', loadChildren: () => import('./add-task-form/add-task-form.module').then(m => m.AddTaskFormModule)},
  { path: '', redirectTo: '/display', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
