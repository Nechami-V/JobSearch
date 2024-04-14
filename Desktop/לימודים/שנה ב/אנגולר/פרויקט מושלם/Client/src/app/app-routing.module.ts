import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { JobComponent } from './components/job/job.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'alljobs',component:JoblistComponent, children:[
    {path:'job/:jobName/:scopeOfHours/:area/:hybrid/:requirements',component:JobComponent},]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
