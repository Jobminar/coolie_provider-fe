import { Component } from '@angular/core';

@Component({
  selector: 'app-select-work',
  templateUrl: './select-work.component.html',
  styleUrl: './select-work.component.css'
})
export class SelectWorkComponent {
  searchQuery: string = '';
  onInputChange(event: Event) {
    
}

  items=[
    {
      names:'beauti',
      checked: false 
    },
    {
      names:'cutting',
      checked: false 
    }, {
      names:'cleaning',
      checked: false 
    }, {
      names:'washing',
      checked: false 
    }, {
      names:'cooking',
      checked: false 
    }, {
      names:'cleaning',
      checked: false 
    }, {
      names:'washing',
      checked: false 
    }, {
      names:'cooking',
      checked: false 
    }
  ]

  send()
  {
    console.log(this.items.filter(item=>item.checked));
  }
}
