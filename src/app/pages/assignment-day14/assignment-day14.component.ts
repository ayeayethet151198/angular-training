import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking , InputObj } from 'src/app/interfaces/booking';
import { checkPhone } from 'src/app/validators/telephone.validator';

interface interfaceForm extends FormGroup {
  value: Booking;
  //add these manually again, same fields as URL
  controls: {
  name: AbstractControl;
  address: AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;
  start: AbstractControl;
  end: AbstractControl;
  guestInRoom: AbstractControl;
  roomType: AbstractControl;
  wifi: AbstractControl;
  readonly totalCost: AbstractControl;
  requirements: AbstractControl;
  };
}

@Component({
  selector: 'app-assignment-day14',
  templateUrl: './assignment-day14.component.html',
  styleUrls: ['./assignment-day14.component.scss']
})
export class AssignmentDay14Component implements OnInit {

  guestform!:FormGroup;
  minDate = new Date();
  NUMBER_OF_NOTE = 5000;
  selectOptions:InputObj[] = [
    { id : 1 ,value: 100, label: 'Single $100'},
    { id : 2 ,value: 250, label: 'Double $250' },
    { id : 3 ,value: 400, label: 'King $400' },
    { id : 4 ,value: 500, label: 'Luxury $500'},
  ];
  radioOptions:InputObj[] = [
    { id : 1 ,value: 5, label: 'Yes'},
    { id : 2 ,value: 0, label: 'No'}
  ];

  constructor(private fb: FormBuilder) {
    this.guestform = this.fb.group({
      name: ['', Validators.required],
      address: [''],
      email: ['', [ Validators.required, Validators.email]],
      phone: ['', [ Validators.required, checkPhone ]],
      start: ['', Validators.required],
      end: ['', Validators.required],
      guestInRoom: ['', Validators.pattern('^[0-9]*$')],
      roomType: [100],
      wifi: [ 0,Validators.required],
      totalCost: [0],
      requirements:['',Validators.maxLength(this.NUMBER_OF_NOTE)]  
    }) as interfaceForm ;
   }

  ngOnInit(): void {
    this.calculateTotalCost();
  }

  get guestForm() {
    return this.guestform.controls;
  }

  submitForm() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.guestform.value , null, 4));
  }

  calculateTotalCost() {
    if (!this.guestform.value.roomType) {
      return;
    }
    const totalVal = parseInt(this.guestform.value.roomType.toString()) + this.guestform.value.wifi;
    this.guestform.patchValue({
      totalCost: totalVal
    });
  }
}
