import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-day22',
  templateUrl: './assignment-day22.component.html',
  styleUrls: ['./assignment-day22.component.scss']
})
export class AssignmentDay22Component implements OnInit {
  id: number;
  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    console.log(typeof (this.id));
  }

}
