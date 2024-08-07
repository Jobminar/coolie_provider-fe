import { HttpClient } from '@angular/common/http';
import {  Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { RazorpayService } from '../razorpay.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrl: './target.component.css'
})
export class TargetComponent {
 
  enteredValue: number = 0;
  maxValue: number = 5; // You can adjust the max value as needed
  // color: string = 'primary'; 
  minTarget:any=0;
  min:any=80;
  divColor:string='black';
  creditBalance:number=50;
  constructor( private http:HttpClient,
                private router:Router,
                private razorpayService:RazorpayService
  )
  {
    this.colorChange();
    this. getTarget();
    this.credits=this.razorpayService.userCredit
  }

  colorChange()
  {
    if (this.minTarget<this.min) {
      this.divColor='red'
    } else {
      
    }
  }

  calculateProgress(value: number, max: number): number {
    const enteredValue=value+5
    if (max === 0) {
      return 0;
    }
    return (enteredValue / max) * 100;
  }
  isDrawerOpen: boolean = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.router.navigate(['menu'])
  }
  current: number = 0;
  max: number = 5;
  radius: number = 150;
  semicircle: boolean = true;
  color: string = 'black';
  background: string = '#eaeaea';
  cancelRate:number=0;
  workingHours:number=0;
  credits:number=0;
  increment(amount = 1) {
    this.current += amount;
  }

  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      top: isSemi ? 'auto' : '50%',
      bottom: isSemi ? '5%' : 'auto',
      left: '50%',
      transform,
      'font-size': this.radius / 3.5 + 'px',
    };
  }

  getTarget(){
    const providerId=localStorage.getItem('providerId')
    const api=`https://api.coolieno1.in/v1.0/providers/service-provider-targets/${providerId}`
    this.http.get<any>(api).subscribe(
      (response)=>{
        console.log(response);
        this.current=response.specialRating;
        this.minTarget=response.responseRate
        this.cancelRate=response.cancellationRate;
        this.workingHours=response.totalWorkingHours;
        // this.credits=response[0].credits;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  navTo(nav:string){
    switch(nav){
      case 'credit': this.router.navigate(['credits']);
      break;
      case 'notification':this.router.navigate(['notification']);
      break;
      case 'buyNow': this.router.navigate(['addCredit'])
    }
  }
}
