import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.css'
})
export class CreditComponent {
  buttons = ['All', 'Recharge', 'Expenses', 'Penalties'];
  activeButton = 'All';
  
  navBack(){
    this.location.back();
  }
  navToAddCredit(){
    this.router.navigate(['addCredit']);
  }
  constructor(private location:Location,private router:Router)
  {

  }
  setActiveButton(button: string) {
    this.activeButton = button;
  }
}
