import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Router } from '@angular/router';
import { mergeMapTo } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {

  userCordinates:any;
  constructor(
    private afMessaging: AngularFireMessaging,
    private http:HttpClient,
    private router:Router
  ) {
    this.listenForMessages();
  }
  fcmToken:any;
  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          console.log('Permission granted! Save to the server!', token);

          this.fcmToken=token
          this.sendTokenToBackend(this.fcmToken);
          // Save the token to your backend database if needed
        },
        (error) => {
          console.error(error);
        }
      );
  }

  order:any;
  
  listenForMessages() {
    console.log("listing...................");
    this.afMessaging.messages.subscribe((message) => {
      console.log(message);
      this.router.navigate(['getOrder'])
      console.log(message.notification);
      console.log(message.data?.['order']);
      console.log(message.notification?.title);
      // if (message.notification?.title ==='New Order!') {
      //   this.order=message.data
      //   console.log("object");
      //   this.router.navigate(['getOrder'])
      // }
    //  alert(message)
    },
  (err)=>{
    console.log(err);
  });
  }

  
  sendTokenToBackend(token:string){
    const api="https://api.coolieno1.in/v1.0/providers/provider-token";
    const requestBody={
      providerId:localStorage.getItem('providerId'),
      token:token
    }
    this.http.post(api,requestBody).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
  })
  }
}
