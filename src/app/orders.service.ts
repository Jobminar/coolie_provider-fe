import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  oredrDetails:any[]=[]
  constructor(private http:HttpClient) { }

  getOrder(id:any):Observable<any>{
   const api=`https://api.coolieno1.in/v1.0/users/order/category/${id}`
    return this.http.get<any>(api);
  }

  getOrderDetails(id:any):Observable<any>{
    const api='';
    return this.http.get<any>(api); 
  }

  accept(id:any){
    const requestBody={
      orderId :id
    }
   const api='https://api.coolieno1.in/v1.0/users/order/accept-order';
   return this.http.post(api,requestBody)
  }

  orderIds:any;
  verifyOtp(){
    const api='https://api.coolieno1.in/v1.0/users/order/start-order';
    const request={
      orderId :this.orderIds
    }
   return this.http.post(api,request)
  }

  verifyStartOrder(otp:any){
    const api='https://api.coolieno1.in/v1.0/users/order/verify-start-order'
    const requestBody={
      orderId:this.orderIds,
      otp:otp
    }

    return this.http.post<any>(api,requestBody)
  }

  completeOrder(){
    const api='https://api.coolieno1.in/v1.0/users/order/complete-order';
    const request={
      orderId:this.orderIds
    }
    return this.http.post(api,request)
  }

  verifyAfterComplete(otp:any){
    const api='https://api.coolieno1.in/v1.0/users/order/order-completed-verifyOtp'
    const requestBody={
      orderId:this.orderIds,
      otp:otp
    }

    return this.http.post<any>(api,requestBody)
  }
}
