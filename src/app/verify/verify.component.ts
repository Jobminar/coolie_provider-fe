import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { JobDetailsService } from '../job-details.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
  @ViewChild('input1') input1!: ElementRef 
  @ViewChild('input2') input2!: ElementRef
  @ViewChild('input3') input3!: ElementRef 
  @ViewChild('input4') input4!: ElementRef 
  otp: FormGroup;

  constructor(private form: FormBuilder,
             private logInService:LoginServiceService,
             private jobDetailsService:JobDetailsService,
              private router:Router,
            private http:HttpClient) { 
    this.otp = this.form.group({
      inputOne: '',
      inputTwo: '',
      inputThree: '',
      inputFour: ''
    });
  }

  onInput(event: any, position: number) {
    const inputValue = event.target.value;
    if (inputValue.length === 1) {
      switch (position) {
        case 1:
          this.input2.nativeElement.focus();
          break;
        case 2:
          this.input3.nativeElement.focus();
          break;
        case 3:
          this.input4.nativeElement.focus();
          break;
        case 4:
          // Focus on next input or do something else when the last input is filled
          break;
        default:
          break;
      }
    }
  }

  async login() {
   
    const otpValue = this.otp.value;
    // Send OTP to backend
    const otp=otpValue.inputOne+otpValue.inputTwo+otpValue.inputThree+otpValue.inputFour 
    console.log("OTP:", this.otp.value);
   console.log(otp)

   this.logInService.verifyOtp(otp).subscribe(
    async (response:any)=>{
      console.log("log in done",response)
      console.log(response.providerId);
      await this.logInService.setUser(response.providerId);
      this.storeUserData()
      await this.chekingUser();
     
      // this.router.navigate(['location'])
      
    },(error:any)=>{
      console.log('error',error);
      alert(error.error.message);
    }
   )
  }

 
  
  storeUserData()
  {
    // const userData = {
    //   email: this.logInService.emailId,
    //   phone: this.logInService.phoneNumber
    // };

   
    // this.logInService.setItems('user_data', userData);
  }
  countdownValue!: number;
  countdownInterval: any;
  minutes!: number;
  seconds!: number;
  resendToggling="resend";


  resend(){
   this.logInService.resendOtp();
   this.resendToggling="countdown";
  this.startCountdown()
    // const email=this.logInService.emailId
    // const phone=this.logInService.phoneNumber
    // this.logInService.logIn(email,phone).subscribe(
    //   (response)=>{
    //     console.log("response",response)
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Otp send Successful!',
    //       text: 'otp send to your mobile number',
    //       timer: 2000, // Timer for 2 seconds
    //       timerProgressBar: true, // Show timer progress bar
    //     });
    //     this.resendToggling="countdown";
    //     this.startCountdown()
    //   },
    //   (error)=>
    //   {
    //     console.log("error",error)
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'otp sending Failed!',
    //       text: 'Invalid username or password.',
    //     });
    //   }
    // )
  }

  startCountdown(): void {
    let totalSeconds = 120; // Initial value in seconds
    this.updateDisplay(totalSeconds);

    this.countdownInterval = setInterval(() => {
      totalSeconds -= 1;
      if (totalSeconds <= 0) {
        this.stopCountdown();
        this.resendToggling="resend";
      } else {
        this.updateDisplay(totalSeconds);
      }
    }, 1000); // Update every second
  }
  stopCountdown(): void {
    clearInterval(this.countdownInterval);
  }
  ngOnDestroy(): void {
    this.stopCountdown();
  }
  updateDisplay(totalSeconds: number): void {
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = totalSeconds % 60;
  }

  async chekingUser(){
   
    // this.jobDetailsService.getUserDetails(localStorage.getItem('providerId'));
    // await console.log(this.jobDetailsService.userDetails);
    //  if (!this.jobDetailsService.userDetails) {
    //   this.router.navigate(['aboutUser']);
    // } else {
    //   this.navTo();
    // }
    const id=localStorage.getItem('providerId')
    const api = `https://api.coolieno1.in/v1.0/providers/provider-details/${id}`;
  
      this.http.get<any>(api).subscribe(
        (data) => {
          console.log("response", data[0]);
          console.log( data[0].providerName);
          this.navTo();  
        },
        (error) => {
          console.log(error);
          this.router.navigate(['aboutUser']);
        }
      );
  }
  navTo(){

    if (this.logInService.alreadyHasAccount) {
      this.router.navigate(['home'])
    } else {
      this.router.navigate(['aboutUser'])
    }
  }

}
