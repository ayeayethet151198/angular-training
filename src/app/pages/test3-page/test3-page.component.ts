import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3-page',
  templateUrl: './test3-page.component.html',
  styleUrls: ['./test3-page.component.scss']
})
export class Test3PageComponent implements OnInit {
  public infos = [
    {
      "name": "Jack Ryan",
      "age": 45
    },
    {
      "name": "Lisa Ray",
      "age": 23
    },
    {
      "name": "Marcus R",
      "age": 19
    },
    {
      "name": "Abhinav M",
      "age": 30
    },
  ];
  
  public isTrue = true;

  public styleExpression = "font-size:25px;backgroundColor:green;";
  
  constructor() { }

  ngOnInit(): void {
  }

}
