import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSvcService } from 'src/app/services/user-svc.service';

@Component({
  selector: 'app-assignment-day23',
  templateUrl: './assignment-day23.component.html',
  styleUrls: ['./assignment-day23.component.scss']
})
export class AssignmentDay23Component implements OnInit {

  loginForm!: FormGroup;
  NUMBER_OF_PASSWORD = 4;

  constructor(private fb: FormBuilder, private userSvc: UserSvcService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(this.NUMBER_OF_PASSWORD)
      ]))
    });
    localStorage.setItem('email', 'aat@gmail.com');
    localStorage.setItem('password', '1111');
  }

  get myLoginForm() {
    return this.loginForm.controls;
  }

  login() {
    this.userSvc.loginSvc(this.loginForm.value);
  }

}
