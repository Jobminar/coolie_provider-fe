import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  options:any=[
    {
      icon:'calendar_today',
      name:'Calendar'
    },
    {
      icon:'work',
      name:'Job History'
    },
    {
      icon:'poker_chip',
      name:'Credits'
    },
    {
      icon:'tv_gen',
      name:'Tranning'
    },
    {
      icon:'featured_seasonal_and_gifts',
      name:'Invite a friend'
    },
    {
      icon:'question_mark',
      name:'Help Center'
    },
    {
      icon:'emoji_events',
      name:'Certificate & documents'
    }
  ]
}
