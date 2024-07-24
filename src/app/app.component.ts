import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Location } from '@angular/common';
import { GetOrdersService } from './get-orders.service';
const { App } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CoolieNo.1_Provider';
  constructor(private location:Location,
    private messagingService: GetOrdersService,
    
  
  ){

  }
  ngOnInit() {

    this.messagingService.requestPermission();
    this.messagingService.listenForMessages()
    this.registerBackButtonListener();
   
  }

  registerBackButtonListener() {
    App['addListener']('backButton', (event: any) => {
      if (event.canGoBack) {
        // If there is a page to go back to, let the app handle it
        this.location.back();
        console.log('Back button pressed, navigating back');
      } else {
        // If there's no page to go back to, exit the app
        console.log('Back button pressed, exiting app');
        App['exitApp'](); // Close the app
      }
    });
  }
  

}
