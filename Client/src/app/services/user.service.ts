import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url:string="https://localhost:44337/api/User";

  getUser(name:string,password:string):Observable<user>{
    return this.http.get(`${this.url}/${name}/${password}`) as Observable<user>;
  }
}
