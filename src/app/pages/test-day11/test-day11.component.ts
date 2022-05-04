import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface Position {
  id: string;
  value: string;
}
@Component({
  selector: 'app-template-form-example',
  templateUrl: './test-day11.component.html',
  styleUrls: ['./test-day11.component.scss']
})
export class TestDay11Component implements OnInit {
  @ViewChild('myForm') public userForm!: NgForm;
  positionList: Position[] = [
    { id: '1', value: 'Developer' },
    { id: '2', value: 'Senior Programmer' },
    { id: '3', value: 'Software Architect' }
  ];
  formData = {
    name: '',
    position: '',
    gender: ''
  };
  constructor(private snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }
  submitForm() {
    if (this.userForm.valid) {
      this.snackBar.open(JSON.stringify(this.formData), '', { duration: 3000 });
    } else {
      this.snackBar.open('Please fill all fields', '', { duration: 2000 });
    }
  }
}