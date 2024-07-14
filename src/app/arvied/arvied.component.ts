import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arvied',
  templateUrl: './arvied.component.html',
  styleUrl: './arvied.component.css'
})
export class ArviedComponent {
 toggleChecked:boolean=false

 constructor(private router:Router){

 }
  toggleDisplay(event:any){
    this.toggleChecked=!this.toggleChecked
    console.log(this.toggleChecked);
    this.router.navigate(['startWork'])
  }
}
