import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userName: string = '';
  email: string = '';
  phone: number = 0;
  address: string = '';
  description: string = '';
  userList: any = [];
 
  constructor() { }

  ngOnInit(): void {
  }
  create() {
    const userInfo = {
      userName: this.userName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      description: this.description,
    };
    this.userList.push(userInfo);
    localStorage.setItem('userList', JSON.stringify(this.userList));
   
  }

}
