import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-day10-user-list',
  templateUrl: './day10-user-list.component.html',
  styleUrls: ['./day10-user-list.component.scss']
})
export class Day10UserListComponent implements OnInit {
  userTable: any=[];
  uTable: any = [];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userTable = localStorage.getItem('userReg');
      this.uTable = JSON.parse(this.userTable);
  }

}
