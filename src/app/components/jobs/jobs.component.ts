import { Component, OnInit} from '@angular/core';
import { Job } from 'src/app/classes/job';
import { JobServiceService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobsList!: Job[];

  constructor(private jobService: JobServiceService) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(list => {
      this.jobsList = list;
    })
  }
}
