import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.scss']
})
export class PostControlComponent implements OnInit {

  postAction = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
  });
  data: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data['post'];
    if (this.router.url !== '/post') {
      this.postAction = new FormGroup({
        title: new FormControl(this.data['title'], Validators.required),
        author: new FormControl(this.data['author'], Validators.required),
      });
    }
  }

  get f() {
    return this.postAction.controls;
  }

  submitForm() {
    if (this.router.url === '/post') {
      this.apiSvc.addPost(this.postAction.value).subscribe({
        next: data => {
          this.router.navigate(['/day24']);
        },
        error: err => {
          console.log('=== handle error ====')
          console.log(err)
        }
      });
    } else {
      this.apiSvc.editPost(this.route.snapshot.params['id'], this.postAction.value).subscribe({
        next: data => {
          this.router.navigate(['/day24']);
        },
        error: err => {
          console.log('=== handle error ====')
          console.log(err)
        }
      });
    }

  }

}
