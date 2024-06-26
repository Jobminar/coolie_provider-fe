import { Component } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.css'
})
export class CreditComponent {
  buttons = ['All', 'Recharge', 'Expenses', 'Penalties'];
  activeButton = 'All';

  setActiveButton(button: string) {
    this.activeButton = button;
  }
}
