import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-day27',
  templateUrl: './assignment-day27.component.html',
  styleUrls: ['./assignment-day27.component.scss']
})
export class AssignmentDay27Component implements OnInit {

  movieList = [
    { name: 'From Bangkok to Mandalay', order_key: 1, type: "drama", description: "From Bangkok to Mandalay is the film cast by Myanmar and Thailand for the goodwill..." },
    { name: 'Mya Mya', order_key: 1, type: "horror", description: "Mya Mya is a 2020 Burmese horror film starring Thinzar Wint Kyaw, Min Taw Win, Dee Dee, and Win Tha Pyay Tun..." },
    { name: 'The Dark Cinema', order_key: 1, type: "comedy", description: "Four filmmaker friends rent a once grand but long decommissioned cinema which is steeped in a dark and horrific history that they are not fully aware of..." },
    { name: 'Chi', order_key: 1, type: "drama", description: "Chi is a 2020 Burmese drama film starring Nay Toe, Thet Mon Myint , Shwe ThaMee..." },
    { name: 'Yin Bat Htae Ka Darr', order_key: 1, type: "drama", description: "Yin Bat Htae Ka Darr is a 2019 Burmese drama film starring Pyay Thi Oo, EainDra Kyaw Zin ..." },
    { name: 'Carbon Dioxide', order_key: 1, type: "horror", description: "Carbon Dioxide is a 2018 Burmese horror film starring ALin Young,Phway Phway..." },
    { name: 'Baw Baw Ga Htaw', order_key: 1, type: "comedy", description: "Baw Baw Ga Htaw is a 2020 Burmese comedy film starring Myint Myat,Khin Hlaing,Joker,Shwe ThaMee,Mone..." },
    { name: 'Saing  Kyite Tae Maung', order_key: 1, type: "comedy", description: "Saing  Kyite Tae Maung is a 2018 Burmese comedy film starring Myint Myat,Thet Mon Myint..." },
    { name: 'Thu Sein Eain', order_key: 1, type: "horror", description: "Thu Sein Eain is a 2019 Burmese horror film starring Lwin Moe, Htun Eaindra Bo..." },
  ];
  drama = [];
  horror = [];
  comedy = [];
  allList = [];

  constructor() {
    const hasMovie = JSON.parse(localStorage.getItem("movie") || "[]");
    if (hasMovie.length === 0) {
      localStorage.setItem('movie', JSON.stringify(this.movieList));
    }
  }

  ngOnInit(): void {
    this.allList = JSON.parse(localStorage.getItem("movie") || "[]");
    this.getMovie();
  }

  getMovie() {
    this.drama = this.allList.filter((data: any) => {
      return data.type === 'drama';
    });
    this.drama.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);
    this.horror = this.allList.filter((data: any) => {
      return data.type === 'horror';
    });
    this.horror.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);
    this.comedy = this.allList.filter((data: any) => {
      return data.type === 'comedy';
    });
    this.comedy.sort((a: any, b: any) => a.order_key > b.order_key ? 1 : -1);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    this.applySortedChange();
  }

  applySortedChange() {
    if (this.drama.length > 0) {
      this.drama = this.drama.map((item: any, index: any) => {
        return Object.assign({ ...item, type: 'drama', order_key: index + 1 });
      })
    }
    if (this.horror.length > 0) {
      this.horror = this.horror.map((item: any, index: any) => {
        return Object.assign({ ...item, type: 'horror', order_key: index + 1 });
      })
    }
    if (this.comedy.length > 0) {
      this.comedy = this.comedy.map((item: any, index: any) => {
        return Object.assign({ ...item, type: 'comedy', order_key: index + 1 });
      })
    }
    this.allList = [...this.drama, ...this.horror, ...this.comedy];
    localStorage.setItem('movie', JSON.stringify(this.allList));
  }
}
