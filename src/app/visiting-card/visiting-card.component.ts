import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { JobDetailsService } from '../job-details.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-visiting-card',
  templateUrl: './visiting-card.component.html',
  styleUrl: './visiting-card.component.css'
})
export class VisitingCardComponent {
  navToBack(){
    this.location.back();
  }
  navToVerification(){
    if (this.logInService.isAccountVerify) {
      this.router.navigate(['identityVerification'])
    } else {
      this.router.navigate(['aadharVerify'])
    }
   
  }

  userName:string='';
  workSeleceted:any[]=this.jobDetailsService.userDetails.work;
  phoneNumber:any;
  navToCertificates(){
    this.router.navigate(['awards'])
  }
  constructor(private router:Router,
              private location:Location,
              private jobDetailsService:JobDetailsService,
              private logInService:LoginServiceService,
              private userService:UserDetailsService
  )
  {
    this.signingDetails()
    this.getWork();
  }

  signingDetails(){
    this.phoneNumber=this.jobDetailsService.userDetails.phone;
    this.userName=this.jobDetailsService.userDetails.providerName;
    // this.workSeleceted=this.jobDetailsService.workDetails;
   
    // console.log(this.workSeleceted);
  }

  getWork(){
    this.userService.getWork(localStorage.getItem('providerId')).subscribe(
      (response)=>{
          console.log(response);
        //  console.log(response[0].works);
        
         this.workSeleceted=response[0].works
      },(err)=>{
        console.log(err);
      }
    )
  }
  navTo(){
    this.router.navigate(['selectWork'])
  }
}
