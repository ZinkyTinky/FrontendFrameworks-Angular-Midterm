import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/classes/job';
import { JobServiceService } from 'src/app/services/job-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  currentId: number = 0;
  currentJob: Job = new Job();

  constructor(private jobService: JobServiceService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentId = parseInt(this.actRoute.snapshot.paramMap.get('id') ?? '0');
    this.jobService.getJob(this.currentId).subscribe(job => {
      this.currentJob = job;
    });
  }

}
