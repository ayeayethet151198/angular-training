import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1-page',
  templateUrl: './test1-page.component.html',
  styleUrls: ['./test1-page.component.scss']
})
export class Test1PageComponent implements OnInit {

  public userList = [
    {
      "id": 1,
      "firstname": "Devglan",
      "lastname": "Devglan",
      "username": "devglan",
      "age": 33,
      "salary": 3456
    },
    {
      "id": 2,
      "firstname": "Tom",
      "lastname": "Asr",
      "username": "tom234",
      "age": 23,
      "salary": 7823
    },
    {
      "id": 3,
      "firstname": "Adam",
      "lastname": "Psr",
      "username": "adam",
      "age": 45,
      "salary": 4234
    },
  ];
  public title = "User Details";
  constructor() { }

  ngOnInit(): void {
  }

}
