import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService {

  userId=localStorage.getItem('provider')
 
  constructor(private http:HttpClient,private router:Router) {
    this.getServices();
   }
  items:any=[]
  selectedJob:any=[]
  userDetails:any;
  userName:string='';
//   selectedAvaliability:any=[{
//     date:'08',
//     day:'Sat',
//     month:'jun',
//     isWorking:'working'
//   },
//   {
//     date:'09',
//     day:'Sun',
//     month:'jun',
//     isWorking:'working'
//   },
//   {
//     date:'10',
//     day:'mon',
//     month:'jun',
//     isWorking:'working'
//   },{
//     date:'11',
//     day:'tue',
//     month:'jun',
//     isWorking:'working'
//   }
// ]
  selectedJobDetails(job:any){
    console.log(job);
    this.selectedJob=job

  }
  getSelectedJob():Observable<any>{
    console.log(this.selectedJob);
    return this.selectedJob;
  }

  
  // getUserDetails(id: any):Observable:boolean {
  //   let isUserEntered:boolean=false;
  //   const api = `https://api.coolieno1.in/v1.0/providers/provider-details/${id}`;
  //   this.http.get<any>(api).subscribe(
  //     (data) => {
  //       console.log("response", data[0]);
  //       this.responseId=data[0]._id
  //       this.userDetails = data;
  //       this.formatingResponse(this.userDetails);
  //       isUserEntered=false
        
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.error.message =='No items found for this user') {
  //         // this.router.navigate(['aboutUser'])
  //         console.log("notfound");
  //         isUserEntered=true
          
  //       }
        
  //     }
  //   );
  //   return isUserEntered
  // }
  getUserDetails(id: any): Observable<boolean> {
    const api = `https://api.coolieno1.in/v1.0/providers/provider-details/${id}`;
    return new Observable<boolean>((observer) => {
      this.http.get<any>(api).subscribe(
        (data) => {
          console.log(data);
          console.log("response", data);
          
          this.userDetails = data;
          this.formatingResponse(this.userDetails);
          observer.next(false);  // User found, set isUserEntered to false
          observer.complete();
        },
        (error) => {
          console.log(error);
          if (error.error.message == 'No items found for this user') {
            console.log("not found");
            observer.next(true);  // User not found, set isUserEntered to true
          } else {
            observer.error(error);  // Handle other errors
            this.router.navigate(['aboutUser']);
          }
          observer.complete();
        }
      );
    });
  }
  
  

  workDetails:any=[];
  formatingResponse(response: any) {
    try {
      // Ensure response.work is a valid JSON string
      if (typeof response.work === 'string') {
        this.workDetails =response.work;
      }
    
      const jsonArrayString = response.work;
      const jsonArray = jsonArrayString;
      this.workDetails = jsonArray
      console.log(this.workDetails);
    } catch (error) {
      console.error("Error processing response.work", error);
    }
  }

  // Custom flatten function for environments that don't support Array.prototype.flat
  flattenArray(arr: any[]): any[] {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(this.flattenArray(val)) : acc.concat(val), []);
  }
  getServices()
  {
    const api='https://api.coolieno1.in/v1.0/core/categories'
    this.http.get<any>(api).subscribe(
      (respone)=>{
        console.log(respone);
        this.formattingServices(respone);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  formattingServices(response:any){
    response.forEach((element: any) => {
      // console.log(element.name);
      this.items.push({
        id:element._id,
        names: element.name,
        checked: false
      })
    });
  }

  getAvailability():Observable<any>{
    const api = `https://api.coolieno1.in/v1.0/providers/provider-date/${localStorage.getItem('providerId')}`;
    return this.http.get<any>(api)
      
  }


}
