import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobComponent } from '../job/job.component';
import { JobField, user } from 'src/app/models/user';
import { JobService } from 'src/app/services/job.service';
import { job } from 'src/app/models/job';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent {
  jobs: job[] | undefined;
  currentUser: user = JSON.parse(localStorage.getItem("user") || `new user(JobField.KINDERGARDEN,"xxx",'12345678',0)`);
  constructor(private router: Router, private jobService: JobService) {
  }

  ngOnInit() {
    this.jobService.getJobs().subscribe(j => {
      
      this.jobs = j.filter(j=>(j.jobField==this.currentUser.jobField));      console.log(this.jobs);

    })
  }

  showJob(job:job): void {
    console.log(job);  
    this.router.navigate(['alljobs/job',job.jobName,job.scopeOfHours,job.area,job.hybrid,job.requirements])
  }
  CV():void{
    localStorage.setItem()
  }
}