import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TraniningService } from '../tranining.service';
import { JobDetailsService } from '../job-details.service';
import { LoginServiceService } from '../login-service.service';
import { FotterComponent } from '../fotter/fotter.component';
import { UserDetailsService } from '../user-details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild('footer') footer!: FotterComponent;
  isDrawerOpen: boolean = false;
  data: any[] = [];
  bucketName = 'coolie1-dev';
  region = 'ap-south-1';
  nextWorking:any=[]
  isAccountVerify:any;

  ngOnInit(): void {
    this.isAccountVerify=this.logInService.isAccountVerify;
      this.trainingService.getingVideos().subscribe(
        (response)=>{
          console.log(response);
          this.data=response
        },
        (error)=>{
          console.log(error);
        }
      )
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.router.navigate(['menu'])
  }

  navToCredit(){
    this.router.navigate(['credits'])
  }

  navToNotification(){
    this.router.navigate(['notification']);
  }

  navToCal(){
    this.router.navigate(['calender']);
  }

  constructor(private router:Router,
              private trainingService: TraniningService,
              private logInService:LoginServiceService,
              private userDetailsService:UserDetailsService,
              private jobDetailsService:JobDetailsService
  ){
   console.log(this.nextWorking.length);
    this.getProviderDetails();
    this.workingDates();
    this.getAvalibility();
    this.getWork()
  }
  ads:any[]=[
    {
      src:'assets/demo/ad.png'
    },
    {
      src:'assets/demo/ad.png'
    },
    {
      src:'assets/demo/ad.png'
    },
    {
      src:'assets/documents/pancard.png'
    },
  ]

  //geting details about jobs and provider details

  async getProviderDetails(){
    this.jobDetailsService.getUserDetails(localStorage.getItem('providerId'))
    setTimeout(()=>{
      this.navToAboutUser();
    },2000) 
  }
   navToAboutUser(){
    let entered;
   this.jobDetailsService.getUserDetails(localStorage.getItem('providerId')).subscribe(
      (response)=>{
        console.log(response);
        entered=response
        if (entered) {
          this.router.navigate(['aboutUser'])
        }
      }
    )
    console.log(entered);
    
  }
  workingDates(){
   this.nextWorking=this.dates
  }
  getAvalibility(){
    this.jobDetailsService.getAvailability().subscribe(
      (response)=>{
        console.log(response);
        this.formattingAvailbility(response)
      },(error)=>{
        console.log(error);
      }
    )
  }

  getWork(){
    this.userDetailsService.getWork(localStorage.getItem('providerId')).subscribe(
      (response)=>{
        console.log(response);
        console.log(response[0]._id);
        this.userDetailsService.workResponse=response[0].works
        this.userDetailsService.workResponseId=response[0]._id
      },(err)=>{
        console.log(err);
      }
    )
  }
  dates:any[]=[]
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  formattingAvailbility(dates:any){
    const today = new Date(); // Get the current date

    for (let index = 0; index < dates.length; index++) {
     
      const element = dates[index];
      
      const date = element.date.split('T')[0];
      
      const currentDate = new Date(date);
     
      const day = this.dayNames[currentDate.getDay()];
      const month = this.monthNames[currentDate.getMonth()];
      const year=currentDate.getFullYear()
      const dateSelected = currentDate.getDate();
      
      // Check if the date is today or later
      if (currentDate >= today || currentDate.toDateString() === today.toDateString()) {
       
        this.dates.push({
                        date:dateSelected,
                        day:day,
                        month:month,
                        isWorking:'working'})
      }
      if (this.dates.length>1) {
        break;
      }
    }
  
  }
 
}
