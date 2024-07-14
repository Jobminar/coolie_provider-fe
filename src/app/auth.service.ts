import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  api='https://api.coolieno1.in/v1.0/providers/provider-auth/signup';
  setLog(number:any){
    console.log(number);
    const requestBody={
      phone:number
    }
    console.log(requestBody);
    this.http.post(this.api,requestBody).subscribe(
      (response)=>{
        console.log(response);
      }
      ,(error)=>{
        console.log(error);
      }
    )
  }

  
}
