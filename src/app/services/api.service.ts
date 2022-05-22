import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';
  data: any;

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<any> {
    const url = this.apiUrl + '/posts';
    return this.http.get(url);
  }

  deletePost(paramId: number): Observable<any> {
    const url = this.apiUrl + '/posts/' + paramId;
    return this.http.delete(url);
  }

  addPost(postData: any): Observable<any> {
    const url = this.apiUrl + '/posts';
    return this.http.post(url, postData);
  }

  getCurrentPost(id: number): Observable<any> {
    const url = this.apiUrl + '/posts/' + id;
    return this.http.get(url);
  }

  editPost(id: number, data: any): Observable<any> {
    const url = this.apiUrl + '/posts/' + id;
    return this.http.put(url, data);
  }

}
