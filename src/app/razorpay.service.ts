import { Injectable } from '@angular/core';
// import Razorpay from 'razorpay';
declare var Razorpay: any;
@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  // constructor() { }
  //  payWithRazorpay(amount: number, orderId: string, currency: string) {
  //   const options = {
  //     "key": "rzp_test_b8XfUOQ4u8dlSq",
  //     "amount": 100*100, 
  //     "currency": "INR",
  //     "name": "Kissan Mart", //your business name
  //     "description": "Test Transaction",
  //     "image": "assets/location/logo-v3 3.png",
  //     "order_id": "", 
  //     "payment_capture": '1', // Auto capture enabled
  //     "capture_after": '3600',
  //     "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  //     handler: (response: any) => {
        

  //     },
  //     "prefill": { 
  //         // "name": this.userName, 
  //         // "email": this.userEmail,
  //         // "contact": this.userNumber 
  //     },
  //     "notes": {
  //         "address": "Razorpay Corporate Office"
  //     },
  //     "theme": {
  //         "color": "#3399cc"
  //     }
      
  //   };

  //   const rzp1 = new Razorpay(options);
  //   rzp1.open();
  // }





  constructor() { }

  payWithRazorpay(amount: number, orderId: string, currency: string) {
    const options = {
      key: 'rzp_test_b8XfUOQ4u8dlSq', // Replace with your Razorpay key
      amount: amount* 100, // amount in paise
      currency: currency,
      name: 'Kissan Mart', // your business name
      description: 'Test Transaction',
      image: 'assets/location/logo-v3 3.png',
      order_id: "", // This will be created from backend
      payment_capture: '1', // Auto capture enabled
      capture_after: '3600',
      callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
      handler: (response: any) => {
        // handle payment success
        console.log(response);
        this.addingCredit(amount)
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#3399cc'
      },
      modal: {
        ondismiss: function() {
          console.log('Checkout form closed');
        },
        escape: false,
        backdropclose: false,
        handleback: true // Ensure full screen on mobile devices
      }
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  }

  addingCredit(amount:any){
    
  }
}
