import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'job-details/:id', component: JobDetailsComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
