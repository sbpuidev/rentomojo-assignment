import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersblogService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(environment.API_URL + 'users');
  }
  getPosts(id){
    return this.http.get(environment.API_URL + 'posts?userId=' +id+ '&skip=0&limit=10');
  }
  getPostById(id){
    return this.http.get(environment.API_URL + 'posts/' +id);
  }
}
