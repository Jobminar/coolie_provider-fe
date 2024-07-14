import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import { JobDetailsService } from '../job-details.service';

@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrl: './select-account.component.css'
})
export class SelectAccountComponent {
  alreadyHasAccount:boolean=false;
  newIsChecked:boolean=false;

  constructor(private loginService:LoginServiceService,
               private router:Router,
              private jobDetailsService:JobDetailsService){
                const id=localStorage.getItem('providerId');
                console.log(id);
                this.jobDetailsService.getUserDetails(id);
  }
  toggleDisplay(){
    console.log(this.alreadyHasAccount);
    // setTimeout(()=>{
    //   this.router.navigate(['log-in']);
    // },1000)
    
    // if (!this.alreadyHasAccount) {
      this.loginService.alreadyHasAccount=true;
      console.log(localStorage.getItem('providerId'));
      if (localStorage.getItem('providerId')) {
          // const id=localStorage.getItem('providerId');
          // console.log(id);
          // this.jobDetailsService.getUserDetails(id);
          console.log("in select account",this.jobDetailsService.userDetails);
        if (!this.jobDetailsService.userDetails) {
            setTimeout(()=>{
              this.router.navigate(['aboutUser']);
            },1000)
           
          }
          else{
            setTimeout(()=>{
              this.router.navigate(['home']);
            },1000)
           
          }
       
      }
      else{
        setTimeout(()=>{
          this.router.navigate(['log-in']);
        },1000)
       
      }
      
      this.loginService.setLogInApi();
      
    // }
  }
  newToggleDisplay(){
    // console.log(this.newIsChecked);
    setTimeout(()=>{
      this.router.navigate(['log-in']);
    },1000)
   
    if (this.newIsChecked) {
      this.loginService.setSignUpApi();
    }
  }
}
