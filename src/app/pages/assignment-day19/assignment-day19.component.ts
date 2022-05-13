import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-day19',
  templateUrl: './assignment-day19.component.html',
  styleUrls: ['./assignment-day19.component.scss']
})
export class AssignmentDay19Component implements OnInit {

  birthday = new Date(1998, 10, 15);
  amount = 100.23;
  power = 5;
  factor = 1;
  myName = "Aye Aye Thet";
  nickName = "aat";
  isMyName = true;

  constructor() { }

  ngOnInit(): void {
  }

}
