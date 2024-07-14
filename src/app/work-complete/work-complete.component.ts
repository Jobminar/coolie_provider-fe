import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-complete',
  templateUrl: './work-complete.component.html',
  styleUrl: './work-complete.component.css',
})
export class WorkCompleteComponent {
  total: number = 0;
  constructor(private orderService: OrdersService,
              private router:Router
  ) {
    this.work = this.orderService.oredrDetails;

    console.log(this.work);
    this.work.forEach((i: any) => {
      this.total = this.total + i.price;
    });
  }
  work: any = [];
  alreadyHasAccount = '';
  toggleDisplay() {
    this.orderService.completeOrder().subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['verifyAfterWork'])
      },(err)=>{
        console.log(err);
      }
    )
  }
}
