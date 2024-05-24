import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent {

  items:any=[
    {
      src:'assets/demo/awards.png'
    },
    {
      src:'assets/demo/awards.png'
    },
    {
      src:'assets/demo/awards.png'
    },
    {
      src:'assets/demo/awards.png'
    }
  ]
}
