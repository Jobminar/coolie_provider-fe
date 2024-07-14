import { Component } from '@angular/core';
import { JobDetailsService } from '../job-details.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  
  navToBack(){
    this.location.back();
  }
  navToHelp(){
    this.router.navigate(['help'])
  }
  constructor(private jobDetailsService:JobDetailsService,
              private location:Location,
              private router:Router
  )
  {
    this.jobDetailsService.getSelectedJob()
    console.log( this.jobDetailsService.getSelectedJob());
   
  }

  noJobs:any=[
    {
     jobs:[{
              name:'Facial and skin care',
              count:'1',
              amount:'799'
            },
            {
              name:'Hand & Foot care',
              count:'1',
              amount:'699'
            },
          ],
     others:'69',
     total:'1574',
     credit:'7',
    }
  ]
}
