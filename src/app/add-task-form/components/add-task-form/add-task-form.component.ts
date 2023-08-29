import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TaskStatus} from "../../../tasks/model/Task.model";


@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {

  @Output() handleSubmit = new EventEmitter<any>();

  public form = this.bf.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required],
  })
  statuses = Object.values(TaskStatus);
  constructor(private bf: FormBuilder) {

  }

  onSubmit() {
    if (this.form.valid) {
      this.handleSubmit.emit(this.form.value);
      this.form.reset();
    }
  }

}
