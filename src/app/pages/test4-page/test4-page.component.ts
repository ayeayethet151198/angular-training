import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4-page',
  templateUrl: './test4-page.component.html',
  styleUrls: ['./test4-page.component.scss']
})
export class Test4PageComponent implements OnInit {

  userName: string = '';
  email: string = '';
  phone: number = 0;
  address: string = '';
  description: string = '';
  userList: any = [];
  userTable: any=[];
  uTable: any = [];

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
  refresh() {
    this.userTable = localStorage.getItem('userList');
    this.uTable = JSON.parse(this.userTable);
  }

}
