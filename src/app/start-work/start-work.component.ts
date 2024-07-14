import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-start-work',
  templateUrl: './start-work.component.html',
  styleUrl: './start-work.component.css'
})
export class StartWorkComponent {
  toggleChecked:boolean=false
  constructor(private router:Router,private orderService:OrdersService){
    
  }

  getOtp(){
    this.orderService.verifyOtp().subscribe(
      (response)=>{
        console.log(response);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  toggleDisplay(event:any){
    this.toggleChecked=!this.toggleChecked
    console.log(this.toggleChecked);
    this.router.navigate(['work/otp'])
  }
}
