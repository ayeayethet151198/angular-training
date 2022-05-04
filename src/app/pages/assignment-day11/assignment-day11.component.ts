import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms';

export interface Position {
  id: string;
  value: string;
}
@Component({
  selector: 'app-assignment-day11',
  templateUrl: './assignment-day11.component.html',
  styleUrls: ['./assignment-day11.component.scss']
})
export class AssignmentDay11Component implements OnInit {

  @ViewChild('myForm') public userForm!: NgForm;
  validForm: any = [];
  date = new FormControl(new Date());
  formData = {
    name: '',
    email: '',
    doms : this.date.value,
  };
  constructor() { }
  ngOnInit(): void {

  }
  submitForm(form:NgForm) {
    this.validForm.push(this.formData);
    this.formData = {
      name: '',
      email: '',
      doms : this.date.value,
    };
  }
  clear(id:any) {
    this.validForm.splice(id, 1);
  }

}
