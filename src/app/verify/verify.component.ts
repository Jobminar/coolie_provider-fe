import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';


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
             
              private router:Router) { 
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

  login() {
  //   const otpValue = this.otp.value;
  //   // Send OTP to backend
  //   const otp=otpValue.inputOne+otpValue.inputTwo+otpValue.inputThree+otpValue.inputFour 
  //   console.log("OTP:", this.otp.value);
  //  console.log(otp)

  //  this.logInService.verifyOtp(otp).subscribe(
  //   (response)=>{
  //     console.log("log in done",response)
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Log in  Successful!',
      
  //       timer: 2000, // Timer for 2 seconds
  //       timerProgressBar: true, // Show timer progress bar
  //     });
  //     this.storeUserData()
  //     this.router.navigate(['location'])
  //   },(error)=>{
  //     console.log('error',error);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Login Failed!',
  //       text: 'Invalid Otp.',
  //     });
  //   }
  //  )
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

}
