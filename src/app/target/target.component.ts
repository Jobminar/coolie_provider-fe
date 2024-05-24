import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrl: './target.component.css'
})
export class TargetComponent {
  enteredValue: number = 0;
  maxValue: number = 5; // You can adjust the max value as needed
  color: string = 'primary'; 
  minTarget:any=76.6;
  min:any=80;
  divColor:string='black';
  creditBalance:number=50;
  constructor()
  {
    this.colorChange()
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
  }
}
