import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-assignment-day11',
  templateUrl: './assignment-day11.component.html',
  styleUrls: ['./assignment-day11.component.scss']
})
export class AssignmentDay11Component implements OnInit {

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
  
  submitForm() {
    this.validForm.push(this.formData);
    this.formData = {
      name: '',
      email: '',
      doms : this.date.value,
    };
  }

  clear(id:number) {
    this.validForm.splice(id, 1);
  }
}
