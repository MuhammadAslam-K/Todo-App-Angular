import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  taskArray = [{ taskName: "bath", isCompleted: true }]

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
    form.reset()
  }

  delete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1)

  }
}
