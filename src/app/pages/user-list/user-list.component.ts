import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userTable: any=[];
  uTable: any = [];
  constructor() { }

  ngOnInit(): void {
    
      this.userTable = localStorage.getItem('userReg');
      this.uTable = JSON.parse(this.userTable);
    
  }

}
