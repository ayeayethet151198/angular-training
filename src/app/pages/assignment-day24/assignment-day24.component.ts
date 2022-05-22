import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/user.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-assignment-day24',
  templateUrl: './assignment-day24.component.html',
  styleUrls: ['./assignment-day24.component.scss']
})
export class AssignmentDay24Component implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'action'];
  postList: Post[] = [];

  constructor(
    private router: Router,
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.getPostData();
  }

  getPostData() {
    this.apiSvc.getAllPost().subscribe({
      next: data => {
        this.postList = data;
      },
      error: err => {
        console.log('=== handle error ====')
        console.log(err)
      }
    });
  }

  deletePostData(id: number) {
    this.apiSvc.deletePost(id).subscribe({
      next: retData => {
        this.getPostData();
      },
      error: err => {
        console.log('=== handle error ====')
        console.log(err)
      }
    })
  }

  editPost(id: number) {
    this.router.navigate(['/post/' + id]);
  }

}
