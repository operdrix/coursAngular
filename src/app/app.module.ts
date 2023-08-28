import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatusColorDirective } from './status-color.directive';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainTaskComponent,
    TaskListComponent,
    StatusColorDirective,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
