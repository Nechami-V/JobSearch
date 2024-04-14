import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { job } from 'src/app/models/job';
import { JobField } from 'src/app/models/user';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit{
  job:job=new job(0,JobField.KINDERGARDEN,"XXX","XXX",0,"XXX",false)
  constructor(private ar:ActivatedRoute){
  }
  ngOnInit(){
    this.ar.params.subscribe(j =>{
      this.job.jobName = j['jobName'];
      this.job.scopeOfHours = j['scopeOfHours'];
      this.job.area = j['area'];
      this.job.hybrid = j['hybrid'];
      this.job.requirements = j['requirements'];
    })
    console.log(this.job);    
  }
}