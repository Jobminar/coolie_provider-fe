import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FotterComponent } from '../fotter/fotter.component';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrl: './ongoing.component.css'
})
export class OngoingComponent {
  @ViewChild('footer') footer!: FotterComponent;
  buttons = ['Ongoing', 'Pending', 'Completed', 'Cancelled'];
  activeButton = 'Ongoing';
  
  navBack(){
    this.location.back();
  }
 
  constructor(private location:Location,private router:Router)
  {

  }
  setActiveButton(button: string) {
    this.activeButton = button;
  }
  navTo(nav:string){
    switch(nav){
      case 'credit': this.router.navigate(['credits']);
      break;
      case 'notification':this.router.navigate(['notification']);
      break;
      case 'menu': this.router.navigate(['menu'])
    }
  }
}
