import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isDrawerOpen: boolean = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  ads:any[]=[
    {
      src:'assets/demo/ad.png'
    },
    {
      src:'assets/demo/ad.png'
    },
    {
      src:'assets/demo/ad.png'
    },
    {
      src:'assets/documents/pancard.png'
    },
  ]
}
