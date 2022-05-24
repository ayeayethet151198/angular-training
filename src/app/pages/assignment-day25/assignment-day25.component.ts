import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Post } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assignment-day25',
  templateUrl: './assignment-day25.component.html',
  styleUrls: ['./assignment-day25.component.scss']
})
export class AssignmentDay25Component implements OnInit {

  searchText = new FormControl('');
  displayedColumns: string[] = ['id', 'title', 'author'];
  dataList: Post[] = [];
  orgList: Post[] = [];

  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getData();
    this.handleSearch();
  }

  getData() {
    this.apiSvc.getDataWithAjax().subscribe((data) => {
      this.orgList = data;
      this.dataList = data;
    }, error => {
      console.log(error);
    });
  }

  handleSearch() {
    this.searchText.valueChanges
      .pipe(
        debounceTime(1000),
      ).subscribe((currentText: any) => {
        if (currentText) {
          this.dataList = this.orgList
            .filter((eachPost: any) => {
              return eachPost.title.toLowerCase().indexOf(currentText.toLowerCase()) >= 0;
            });
        } else {
          this.dataList = this.orgList;
        }
      });
  }

}

