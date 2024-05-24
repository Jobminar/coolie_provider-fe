import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  selectWork(work:string):any
  {
    return work;
  }
}
