import { Component } from '@angular/core';

@Component({
  selector: 'app-about-work',
  templateUrl: './about-work.component.html',
  styleUrl: './about-work.component.css'
})
export class AboutWorkComponent {
  selectedGender:string=''
  selectedAge:string=''

  sendResponse()
  {
    console.log(this.selectedAge,this.selectedGender);
  }
}
