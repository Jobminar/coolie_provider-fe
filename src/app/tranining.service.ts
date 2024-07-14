import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraniningService {

  constructor(private http:HttpClient) { }

  apiForVideo:any='https://api.coolieno1.in/v1.0/admin'
  getingVideos():Observable<any>
  {
    
    return this.http.get<any>(`${this.apiForVideo}/training`)
  }

  gettingInductionVeideos():Observable<any>{
    return this.http.get<any>(`${this.apiForVideo}/induction`)
  }
}
