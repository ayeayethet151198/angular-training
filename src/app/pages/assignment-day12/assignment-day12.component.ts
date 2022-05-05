import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-day12',
  templateUrl: './assignment-day12.component.html',
  styleUrls: ['./assignment-day12.component.scss']
})
export class AssignmentDay12Component implements OnInit {
  regForm: any = [];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    fname: new FormControl('',  Validators.required ),
    lname: new FormControl('',  Validators.required ),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    pwd: new FormControl('',  Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
    confirmPwd: new FormControl('',Validators.required)
  });

  public myError = (controlName: string, errorName: string) =>{
    return this.registrationForm.controls[controlName].hasError(errorName);
  }
  
  submitForm(form:any) {
    this.regForm.push(this.registrationForm);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
}
