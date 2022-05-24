import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-day26',
  templateUrl: './assignment-day26.component.html',
  styleUrls: ['./assignment-day26.component.scss']
})
export class AssignmentDay26Component implements OnInit {


  toDoListArr = [];
  toDoListForm = this.fb.group({
    task: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f() {
    return this.toDoListForm.controls;
  }

  addToDoList() {
    this.toDoListArr.push(this.toDoListForm.value);
    this.toDoListForm.reset();
  }

  deleteData(id) {
    this.toDoListArr.splice(id,1);
  }
}
