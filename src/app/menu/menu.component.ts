import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetailsService } from '../job-details.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
  userName:string='';
  whatsAppStaus='on';
  constructor(private location:Location,
              private router:Router,
              private loginService:LoginServiceService,
              private jobDetailsService:JobDetailsService
  )
  {
    this.getUsername();
  }

  getUsername(){
    this.userName=this.jobDetailsService.userDetails.providerName;
    console.log(this.jobDetailsService.userDetails);
  }
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

  navTo(cat: string): void {
    console.log(cat);
    switch(cat) {
      case 'Calendar':
        this.router.navigate(['calender']);
        break;
      case 'Job History':
        this.router.navigate(['jobHistory']);
        break;
      case 'Credits':
        console.log('inside');
        this.router.navigate(['credits']);
        break;
      case 'Tranning':
        this.router.navigate(['training']);
        break;
      case 'Invite a friend':
        this.router.navigate(['referAndEarn']);
        break;
      case 'Help Center':
        this.router.navigate(['help']);
        break;
      case 'Certificate & documents':
        this.router.navigate(['awards']);
        break;
        case 'packages':
        this.router.navigate(['packages']);
        break;
      default:
        console.log('No matching case found');
    }
  }
  navToFinancial(){
    this.router.navigate(['financialDetails'])
  }
  navBack(){
    this.location.back()
  }
  navToVisiting(){
    this.router.navigate(['visitingCard'])
  }
  logOut(){
    this.loginService.removeUser()
    this.router.navigate(['selectAccount']);
  }
  statusChange(){
    if (this.whatsAppStaus==='on') {
      this.whatsAppStaus='off';
    }
    else if ( this.whatsAppStaus='off') {
      this.whatsAppStaus='on';
    } 
    
  }
}
