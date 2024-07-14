import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetailsService } from '../job-details.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrl: './get-order.component.css'
})
export class GetOrderComponent implements OnInit,OnDestroy{
  timeLeft: number = 120; // 2 minutes in seconds
  interval: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.current=this.timeLeft
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  get minutes(): number {
    return Math.floor(this.timeLeft / 60);
  }

  get seconds(): number {
    return this.timeLeft % 60;
  }

  current: number = 0;
  max: number = 120;
  radius: number = 100;
  color: string = 'rgba(255, 0, 0, 1)';
  background: string = 'rgba(253, 5, 0, 0.4)';
  cancelRate:number=0;
  workingHours:number=0;
  credits:number=0;


    serviceName:any=[{
      name:'cleaning'
    },
    {
      name:'tank cleaning'
    },{
      name:'tankcleaning'
    }
  ]


  workSeleceted:any
  constructor(private router:Router,
              private jobDetailsService:JobDetailsService,
            private orderService:OrdersService){

    console.log(this.jobDetailsService.workDetails);
    
     this.workSeleceted=this.jobDetailsService.workDetails
      this.getOrder()
    // this.router.navigate(['getOrder'])
  }

  orderIds:any[]=[]
  getOrder(){
    console.log("inside");
    let workingId:any[]=[]
    this.workSeleceted.forEach((i: any)=>{
      workingId.push(i.id);
    })
    console.log(workingId);
    this.orderService.getOrder(workingId).subscribe(
      (response)=>{
        console.log(response);
        this.getCartId(response.data[0])
      },(error)=>{
        console.log(error);
      }
    )
  }

  nameOfService:string='';
  nameOfCategory:string='';
  price:number=0;
  quantity:number=0;
  acceptStatus:any;

  // getCartId(data: any) {
  //   let order = data.cartId.items;
  //   console.log(order);
  
  //   const displayCategory = (index: number) => {
  //     if (index < order.length) {
  //       const element = order[index];
  //       this.nameOfCategory = element.categoryId.name;
  //       this.nameOfService= element.serviceId.name
  //       this.price=element.serviceId.serviceVariants[0].price;
  //       this.quantity=element.quantity
  //       console.log(this.nameOfCategory);
  //       if (this.acceptStatus) {
  //         return
  //       }
  //       else{
  //         console.log("next");
  //         index + 1
  //       }
  //       setTimeout(() => displayCategory(index + 1), 5000);
  //       // Schedule the next category to be displayed after 5 seconds
  //       this.acceptStatus=null;
  //     }
  //   };
  
  //   // Start the display chain
  //   displayCategory(0);
  // }
  getCartId(data: any) {
    let order = data.cartId.items;
    console.log(order);
    let orderId=data._id;
    const displayCategory = (index: number) => {
      if (index < order.length) {
        this.orderService.oredrDetails=[];
        const element = order[index];
        this.nameOfCategory = element.categoryId.name;
        this.nameOfService = element.serviceId.name;
        this.price = element.serviceId.serviceVariants[0].price;
        this.quantity = element.quantity;
        this.orderService.oredrDetails.push({"category":this.nameOfCategory,
          "name":this.nameOfService,"price":this.price,"quantity":this.quantity}
        )
        console.log(this.nameOfCategory);
  
        let checkInterval = setInterval(() => {
          if (this.acceptStatus !== null) {
            clearInterval(checkInterval);
            if (this.acceptStatus) {
              // User accepted, exit the loop
              this.acceptedOrder(orderId)
              console.log("User accepted, exiting the loop");
              this.acceptStatus = null; // Reset acceptStatus
              return;
            } else {
              // User declined, proceed to the next index
              console.log("User declined, moving to the next item");
              this.acceptStatus = null; // Reset acceptStatus
              displayCategory(index + 1);
            }
          }
        }, 1000);
  
        // Automatically move to the next item after 5 seconds if no action is taken
        setTimeout(() => {
          if (this.acceptStatus === null) {
            clearInterval(checkInterval);
            console.log("Automatically moving to the next item");
            displayCategory(index + 1);
          }
        }, 120000);
      }
    };
  
    // Start the display chain
    displayCategory(0);
  }
  


  accepted() {
    this.acceptStatus = true;
   
  }
  
  declined() {
    this.acceptStatus = false;
    console.log("declined");
    this.acceptStatus=false
    this.timeLeft=120
  }

  acceptedOrder(element:any){
    console.log(element);
    this.orderService.accept(element).subscribe(
      (response: any)=>{
        console.log(response);
        this.orderService.orderIds=element
        this.router.navigate(['arrived']);
      },(err)=>{
        console.log(err);
      }
    )
  }
}
