import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';
  data: any;

  constructor(private http: HttpClient) { }

  //assignment-day24 start
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
  //assignment-day24 end

  //assignment-day25 start
  getDataWithAjax(): Observable<any> {
    const url = this.apiUrl + '/posts';
    return ajax.getJSON(url).pipe(
      map((data: any) => {
        if (data.length > 0) {
          data.map((eachData: any) => {
            eachData.author = eachData.author.toUpperCase();
            return eachData;
          })
        }
        return data;
      })
    );
  }
  //assignment-day25 end
}
