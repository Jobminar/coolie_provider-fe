import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }

  api:string='https://api.coolieno1.in/v1.0'
  selectWork(work:string):any
  {
    return work;
  }

  workResponseId:any;
  workResponse:any=[]

  currentLocation:any;
  currentCordinates:any;
  getWork(id:any){
    const aaa=`${this.api}/${`providers/work/${id}`}`
    console.log(aaa);
    return this.http.get<any>(aaa)
  }
  getFinancialDetails():Observable<any>{
    const api=`https://api.coolieno1.in/v1.0/providers/provider-finance/${localStorage.getItem('providerId')}`;
   return this.http.get<any>(api)
  }

  getPackages():Observable<any>{
    const api='https://api.coolieno1.in/v1.0/admin/provider-package';
    return this.http.get<any>(api);
  }

 
}
