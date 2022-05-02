import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './day10-user-registration.component.html',
  styleUrls: ['./day10-user-registration.component.scss']
})
export class Day10UserRegistrationComponent implements OnInit {
  public form: any;
  public userForm: any =[];
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      email: [null],
      phone:[null],
      address: [null],
      description: [null],
      dob: [null],
      country: [null],
      gender: [null],
    });
  }
  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
   
    this.userForm.push(form.value);
    localStorage.setItem('userReg', JSON.stringify(this.userForm));
  }
}