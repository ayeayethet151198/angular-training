import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2-page',
  templateUrl: './test2-page.component.html',
  styleUrls: ['./test2-page.component.scss']
})
export class Test2PageComponent implements OnInit {
  public value = 0;
  inFun(num: any) {
    if (this.value >= 10) {
      (num.target as HTMLButtonElement).disabled = true;
    } else {
      (num.target as HTMLButtonElement).disabled = false;
      this.value++;
    }
    
  }
  deFun(num: any) {
    if (this.value == 0) {
      (num.target as HTMLButtonElement).disabled = true;
    } else {
      (num.target as HTMLButtonElement).disabled = false;
      this.value--;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
