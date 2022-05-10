import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

const USER_LIST: User[] = [
  { id: 1, name: 'aye aye', email: 'ayeaye@gmail.com', age: 24, phone: '09958907090', hobby: 'dancing' },
  { id: 2, name: 'kyaw kyaw', email: 'kaywkyaw@gmail.com', age: 24, hobby: 'swimming' },
  { id: 3, name: 'aung aung', email: 'aungaung@gmail.com', age: 24, phone: '09958907090', hobby: 'dancing' },
  { id: 4, name: 'su su', email: 'susu@gmail.com', age: 24, phone: '09958907090' },
  { id: 5, name: 'mya mya', email: 'myamya@gmail.com', hobby: 'singing' },
  { id: 6, name: 'aye aye thet', email: 'ayeayethet@gmail.com', age: 24, phone: '09958907090', hobby: 'football' },
];

@Component({
  selector: 'app-assignment-day15',
  templateUrl: './assignment-day15.component.html',
  styleUrls: ['./assignment-day15.component.scss']
})
export class AssignmentDay15Component implements OnInit {

  userListArr = USER_LIST;
  displayedColumns = ['id', 'name', 'email', 'age', 'phone', 'hobby'];

  constructor() { }

  ngOnInit(): void {
  }

}
