import { Injectable } from '@angular/core';
import { Job } from '../classes/job';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobServiceService {
  listOfJobs: Job[] = [
    {
      id: 1,
      title: 'Hockey coach',
      description: 'Tought kids how to play hockey',
      duration: '3 years',
      employer: 'The Hockey farm',
    },
    {
      id: 2,
      title: 'Waiter',
      description: 'Waited tables at a coffee shop',
      duration: '3 months',
      employer: 'The Merchant',
    },
    {
      id: 3,
      title: 'Bartender',
      description: 'Tended bars at a local pub',
      duration: '1 month',
      employer: 'De dekke',
    },
    {
      id: 4,
      title: 'Front-end web developer',
      description:
        'Designed and developed a front-end app for a software company',
      duration: '1 year (Ongoing)',
      employer: 'Rivetprop',
    },
  ];

  constructor() {}

  getAllJobs(): Observable<Job[]> {
    return of(this.listOfJobs);
  }
  getJob(id: number): Observable<any> {
    var job!: Job ;
    this.listOfJobs.forEach((j) => {
      if (j.id === id) {
        job = j;
      }
    });
    return of(job);
  }
}
