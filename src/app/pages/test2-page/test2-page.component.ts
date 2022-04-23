import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2-page',
  templateUrl: './test2-page.component.html',
  styleUrls: ['./test2-page.component.scss']
})
export class Test2PageComponent implements OnInit {
  public value = 0;
  public isDisabled1 = false;
  public isDisabled2 = true;
  inFun() {
    if (this.value >= 10) {
      this.isDisabled1 = true;
    } else {
      this.value++;
      this.isDisabled2 = false;
    }
    
  }
  deFun() {
    if (this.value == 0) {
      this.isDisabled2 = true;
      
    } else {
      this.isDisabled1 = false;
      this.value--;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
