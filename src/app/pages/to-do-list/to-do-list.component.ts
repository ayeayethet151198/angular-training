import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() toDoListFromParent;
  @Output() deleteFromChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(id) {
    this.deleteFromChild.emit(id);
  }
}


