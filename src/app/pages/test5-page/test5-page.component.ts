import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5-page',
  templateUrl: './test5-page.component.html',
  styleUrls: ['./test5-page.component.scss']
})
export class Test5PageComponent implements OnInit {
  people: any[] = [
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
