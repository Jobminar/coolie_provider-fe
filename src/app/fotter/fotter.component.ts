import { Component } from '@angular/core';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrl: './fotter.component.css'
})
export class FotterComponent {
  activeIcon: string = 'home'; // Default active icon

  changeColor(icon: string) {
    this.activeIcon = icon;
  }
}
