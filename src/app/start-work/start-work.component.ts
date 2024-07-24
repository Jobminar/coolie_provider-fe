import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { MapBoxService } from '../map-box.service';

@Component({
  selector: 'app-start-work',
  templateUrl: './start-work.component.html',
  styleUrl: './start-work.component.css'
})
export class StartWorkComponent {
  toggleChecked:boolean=false
  userFullAddress:any;
  constructor(private router:Router,
    private orderService:OrdersService,
    private mapboxService:MapBoxService){
    this.intalizeMap();
  }
  async intalizeMap(){
    const userCoordinates:[number,number]=this.mapboxService.userCordinates;
    console.log(userCoordinates);
    
    this.mapboxService.initializeMap()
    console.log(this.mapboxService.mapStatus);
    // Once initialization is complete, add the destination marker
    this.userFullAddress=this.orderService.userFullAddress;
    await this.mapboxService.addDestinationMarker(userCoordinates);
    
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
