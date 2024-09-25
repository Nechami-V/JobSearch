import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { job } from '../models/job';
import { JobField } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  url:string = "https://localhost:44337/api/Job/GetJobs"
  getJobs():Observable<job[]>{
    return this.http.get(`${this.url}`)as Observable<job[]>
  }
}
