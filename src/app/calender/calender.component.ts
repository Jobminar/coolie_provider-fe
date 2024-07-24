// import { Location } from '@angular/common';
// import { Component, ElementRef, Renderer2, TemplateRef, ViewChild } from '@angular/core';
// import { MatSlideToggleChange } from '@angular/material/slide-toggle';
// import { JobDetailsService } from '../job-details.service';
// import { HttpClient } from '@angular/common/http';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// @Component({
//   selector: 'app-calender',
//   templateUrl: './calender.component.html',
//   styleUrl: './calender.component.css'
// })
// export class CalenderComponent {
//   @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any> ;
//   date=new Date()
//   userId=localStorage.getItem('providerId')

//   defaultMonth = this.date.toLocaleDateString('default', { month: 'long' });
//   daySelected:any= String(this.date.getDate()).padStart(2, '0');
//   monthSelected:any= this.defaultMonth.substring(0,3)
//   dateSelected:any=  this.date.getDate()

//   isChecked:boolean=false;
//   working:boolean=false;

//   extendServices:boolean=false;
  
//   fullDate:any;
//   selectedItem:any;
//   services:any[]=[];
//   nextFourDays: any []= [];
//   nextDaysOfIndex:any=[]

//   timeSelected:any;
//   navToBack(){
//     this.location.back();
//   }

//   constructor(private location :Location,
//               private renderer: Renderer2, 
//               private el: ElementRef,
//               private http:HttpClient,
//               public dialog: MatDialog,
//               private jobDetailsService:JobDetailsService)
//               {
               
//   }
//   dialogRef!: MatDialogRef<any>;
//   extend(){
//     this.extendServices=!this.extendServices;
//     console.log(this.extendServices);
//   }
//   openServiceDialog(): void {
//     this.dialogRef = this.dialog.open(this.dialogTemplate);

//     this.dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.services = result;
//         console.log(this.services);
//       }
//     });
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   onSubmit(): void {
//     this.dialogRef.close(this.services);
//   }

//   getFirstDivClass(index:any){
//     const classes = ['datess'];
//     if (index===0) {
//       classes.push('datess:first-child:hover'); // Add hover class for first div if data exists
//     }
//     return classes;
//   }

  

//   ngOnInit(): void {
//     this. getDetails()
//     this.getNextFourDays();
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     this.daySelected=days[this.date.getDay()]

//     this.getSelectedService();
    
//   }
//   timing:any[]=[
//     {time:'07:00AM - 10:00AM',isSelected:false},
//     {time:'10:00AM - 01:00PM',isSelected:false},
//     {time:'01:00PM - 04:00PM',isSelected:false},
//     {time:'04:00PM - 7:00PM',isSelected:false}
//   ]
//   getSelectedService()
//   {
//     console.log("inside service");
//     this.services=this.jobDetailsService.userDetails.work;
    
//     const demo={nameOfService:'cleaning'}
//     this.services.push(demo)
//     console.log(this.services);
//   }
//   availabilityService(item:any)
//   {
//     console.log(item);
//     this.selectedItem=item
//   }
//   getNextFourDays() {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const today = new Date();
    
//     for (let i = 0; i < 10; i++) {
//       const currentDay = new Date(today);
//       currentDay.setDate(today.getDate() + i);
//       const formattedDate = this.formatDate(currentDay);
//       this.nextFourDays.push({
//         date: formattedDate,
//         day: days[currentDay.getDay()],
//         workingStaus:false,
//         timming:this.timing
       
//       });
//     }
//     console.log(this.selectedIndex);
//     this.nextDaysOfIndex=this.nextFourDays[this.selectedIndex]
//     console.log(this.nextFourDays[this.selectedIndex]);
//     console.log( this.nextDaysOfIndex);
//   }

//   formatDate(date: Date): string {
   
//     const day = String(date.getDate()).padStart(2, '0');
//     const year = date.getFullYear();
//     const month = date.toLocaleDateString('default', { month: 'long' });
//     console.log(month.substring(0,3)); 
//     // const monthss = String(date.getMonth() + 1).padStart(2, '0');
//     // console.log(monthss);
//     return `${day}-${month}`;
//   }
//   selectedIndex:number=0;
  
//   selected(item:any,index:any){
    
//     console.log(item.workingStaus);
//     this.isChecked=false;
//     if (item.workingStaus) {
//       this.working=true;
//     } else {
//       this.working=false;
//     }
//     if (this.timing) {
      
//     } else {
      
//     }
//     // this.working=false;
//    this.selectedIndex=index;
   
//     this.dateSelected=item.date.toString().split('-')[0];
//     this.daySelected=item.day;
//     this.monthSelected=item.date.toString().split('-')[1]
//     console.log(this.dateSelected,this.monthSelected);
//     console.log(this.nextFourDays[this.selectedIndex]);
//     this.nextDaysOfIndex=this.nextFourDays[this.selectedIndex]
//     console.log(this.nextFourDays[this.selectedIndex]);
//     console.log( this.nextDaysOfIndex);
//   }
 
//   workingChange() {
   
//     console.log(this.nextDaysOfIndex);
//     console.log(this.working);
//     // this.working=!this.working
//     this.nextFourDays[this.selectedIndex].workingStaus=!this.nextFourDays[this.selectedIndex].workingStaus;
   
//       console.log(this.nextFourDays[this.selectedIndex].workingStaus);
    
//    }
   
//   onToggleChange(event:MatSlideToggleChange,item:any){
//     console.log(item.time);
//     console.log(item);
//     const indexOfMatch=this.nextFourDays.indexOf(item);
//     console.log(this.nextFourDays[this.selectedIndex]);
//     console.log(this.nextFourDays[this.selectedIndex].timming);
//     console.log(this.nextFourDays[this.selectedIndex].timming.indexOf(item))
//     console.log(item.isSelected);
//     console.log(this.nextFourDays);
//     this.timeSelected=item.time;
//     const currentDate =new Date()
//     currentDate.setDate(this.dateSelected);
//     console.log(currentDate);
//     const day = currentDate.getDate();
//     const month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
//     const year = currentDate.getFullYear();
//     this.fullDate= `${year}-${month}-${day}`
//     console.log(`The date of the 13th of this month is: ${year}-${month}-${day}`);
//     console.log('Slide toggle changed:', event.checked);
    
//    }
//    submitAllData(){
//     this.sendingData();
//    }
//    sendingData()
//    {
   
//      const api='http://13.126.118.3:3000/v1.0/providers/provider-date';
//      const requestBody={
//       userId:this.userId,
//       service:this.selectedItem,
//       date:this.fullDate,
//       work:this.working,
//       time:this.timeSelected

//      }
//      console.log(requestBody);
//      this.http.post(api,requestBody).subscribe(
//       (response)=>{
//         console.log(response);
//       },
//       (error)=>{
//         console.log(error);
//       }
//      )
//    }
//    getDetails()
//    {
//     console.log("wait getting");
//     const api=`http://13.126.118.3:3000/v1.0/providers/provider-date/${this.userId}`;
//     this.http.get<any>(api).subscribe(
//       (response)=>{
//         console.log(response);
//        this.showAvilability(response);
//       },
//       (error)=>{
//         console.log(error);
//       }
//     )
//    }

//    //manuplating the data for providing the defultly showing that providers avialability

//   showAvilability(response:any){
   
//   console.log(response);
//   console.log(this.nextFourDays);
    
//     for (let index = 0; index < response.length; index++) {
//       const element = response[index];
//       const dayString=element.date;
//       const onlyDate=new Date(dayString);
//       const day=onlyDate.getDate();
//       this.nextFourDays.forEach((item: { date: string; workingStaus: boolean;timming:any }) =>{
//         const dateFromFe=item.date.split('-')[0];
//         if (day.toString()===dateFromFe) {
//           item.workingStaus=true;
//           this.working=true;
         
//           item.timming.forEach((time: any) =>{
           
//             if (time.time===element.time ) {
//               console.log(time.time,element.time);
//               const indexOfMatch=this.nextFourDays.indexOf(item);
//              console.log(item);
//               const indexOfTime=this.nextFourDays[indexOfMatch].timming.indexOf(time)
//               console.log(indexOfTime);
//               if(this.nextFourDays[indexOfMatch].timming[indexOfTime].time==element.time)
//                 {
//                   this.nextFourDays[indexOfMatch].timming[indexOfTime].isSelected=true
//                   console.log(this.nextFourDays[indexOfMatch].timming[indexOfTime].time);
//                 }
              
//             }
//           })
          
//         }
//       })
//     }
//    }
 
  
  
// }



// working proper but 1.not showing avlability according ot service and when user clik on one toggle rest of the toggle is reamng same before sending to back end

// import { Location } from '@angular/common';
// import { Component, ElementRef, Renderer2, TemplateRef, ViewChild } from '@angular/core';
// import { MatSlideToggleChange } from '@angular/material/slide-toggle';
// import { JobDetailsService } from '../job-details.service';
// import { HttpClient } from '@angular/common/http';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// @Component({
//   selector: 'app-calender',
//   templateUrl: './calender.component.html',
//   styleUrl: './calender.component.css'
// })
// export class CalenderComponent {
//   @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
//   date = new Date();
//   userId = localStorage.getItem('providerId');

//   defaultMonth = this.date.toLocaleDateString('default', { month: 'long' });
//   daySelected: any = String(this.date.getDate()).padStart(2, '0');
//   monthSelected: any = this.defaultMonth.substring(0, 3);
//   dateSelected: any = this.date.getDate();

//   isChecked: boolean = false;
//   working: boolean = false;
//   extendServices: boolean = false;
//   fullDate: any;
//   selectedItem: any;
//   services: any[] = [];
//   nextFourDays: any[] = [];
//   nextDaysOfIndex: any = [];
//   timeSelected: any;
//   dialogRef!: MatDialogRef<any>;

//   constructor(
//     private location: Location,
//     private renderer: Renderer2,
//     private el: ElementRef,
//     private http: HttpClient,
//     public dialog: MatDialog,
//     private jobDetailsService: JobDetailsService
//   ) {}

//   extend() {
//     this.extendServices = !this.extendServices;
   
//   }

//   openServiceDialog(): void {
//     this.dialogRef = this.dialog.open(this.dialogTemplate);

//     this.dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.services = result;
       
//       }
//     });
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   onSubmit(): void {
//     this.dialogRef.close(this.services);
//   }

//   ngOnInit(): void {
//     this.getDetails();
//     this.getNextFourDays();
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     this.daySelected = days[this.date.getDay()];
//     this.getSelectedService();
//   }

//   timing: any[] = [
//     { time: '07:00AM - 10:00AM', isSelected: false },
//     { time: '10:00AM - 01:00PM', isSelected: false },
//     { time: '01:00PM - 04:00PM', isSelected: false },
//     { time: '04:00PM - 07:00PM', isSelected: false }
//   ];

//   getSelectedService() {
    
//     this.services = this.jobDetailsService.userDetails.work;
//     const demo = { nameOfService: 'cleaning' };
//     this.services.push(demo);
    
//   }

//   availabilityService(item: any) {
    
//     this.selectedItem = item;
//   }

//   getNextFourDays() {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const today = new Date();

//     for (let i = 0; i < 10; i++) {
//       const currentDay = new Date(today);
//       currentDay.setDate(today.getDate() + i);
//       const formattedDate = this.formatDate(currentDay);
//       this.nextFourDays.push({
//         date: formattedDate,
//         day: days[currentDay.getDay()],
//         workingStaus: false,
//         timming: this.timing.map(t => ({ ...t }))
//       });
//     }
   
//     this.nextDaysOfIndex = this.nextFourDays[this.selectedIndex];
    
//   }

//   formatDate(date: Date): string {
//     const day = String(date.getDate()).padStart(2, '0');
//     const year = date.getFullYear();
//     const month = date.toLocaleDateString('default', { month: 'long' });
   
//     return `${day}-${month}`;
//   }

//   selectedIndex: number = 0;

//   selected(item: any, index: any) {
   
//     this.isChecked = false;
//     if (item.workingStaus) {
//       this.working = true;
//     } else {
//       this.working = false;
//     }
//     this.selectedIndex = index;
//     this.dateSelected = item.date.toString().split('-')[0];
//     this.daySelected = item.day;
//     this.monthSelected = item.date.toString().split('-')[1];
   
//     this.nextDaysOfIndex = this.nextFourDays[this.selectedIndex];
    
//   }

//   workingChange() {
   
//     this.nextFourDays[this.selectedIndex].workingStaus = !this.nextFourDays[this.selectedIndex].workingStaus;
   
//   }

//   onToggleChange(event: MatSlideToggleChange, item: any) {
//     this.timeSelected = item.time;
//     console.log(item.isSelected);
//     // Update all instances of the same time slot across different days
//     this.nextFourDays.forEach(day => {
//       day.timming.forEach((timeSlot: any) => {
//         if (timeSlot.time === item.time) {
//           timeSlot.isSelected = event.checked;
//         }
//       });
//     });
//     const currentDate = new Date();
//     currentDate.setDate(this.dateSelected);
//     const day = currentDate.getDate();
//     const month = currentDate.getMonth() + 1;
//     const year = currentDate.getFullYear();
//     this.fullDate = `${year}-${month}-${day}`;
//   }

//   submitAllData() {
//     this.sendingData();
//   }

//   sendingData() {
//     const api = 'http://13.126.118.3:3000/v1.0/providers/provider-date';
//     const requestBody = {
//       userId: this.userId,
//       service: this.selectedItem,
//       date: this.fullDate,
//       work: this.working,
//       time: this.timeSelected
//     };
//     this.http.post(api, requestBody).subscribe(
//       response => {
//         console.log(response);
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }

//   availabilityResponse:any[]=[];
//   getDetails() {
//     const api = `http://13.126.118.3:3000/v1.0/providers/provider-date/${this.userId}`;
//     this.http.get<any>(api).subscribe(
//       response => {
//         console.log(response);
//         this.availabilityResponse=response;
//         this.showAvilability(response);
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }

//   deleteData(){

//   }
//   showAvilability(response: any) {
//     console.log(this.services);
//     for (let index = 0; index < response.length; index++) {
//       const element = response[index];
//       const dayString = element.date;
//       const onlyDate = new Date(dayString);
//       const day = onlyDate.getDate();

//       this.nextFourDays.forEach((item: { date: string; workingStaus: boolean; timming: any }) => {
//         const dateFromFe = item.date.split('-')[0];
//         if (day.toString() === dateFromFe) {
//           item.workingStaus = true;
//           this.working = true;

//           item.timming.forEach((time: any) => {
//             if (time.time === element.time) {
              
//               const indexOfMatch = this.nextFourDays.indexOf(item);
              
//               const indexOfTime = this.nextFourDays[indexOfMatch].timming.indexOf(time);
              
//               if (this.nextFourDays[indexOfMatch].timming[indexOfTime].time == element.time) {
//                 this.nextFourDays[indexOfMatch].timming[indexOfTime].isSelected = true;
             
//               }
//             }
//           });
//         }
//       });
//     }
//   }
// }




import { Location } from '@angular/common';
import { Component, ElementRef, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { JobDetailsService } from '../job-details.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  date = new Date();
  userId = localStorage.getItem('providerId');

  defaultMonth = this.date.toLocaleDateString('default', { month: 'long' });
  daySelected: any = String(this.date.getDate()).padStart(2, '0');
  monthSelected: any = this.defaultMonth.substring(0, 3);
  dateSelected: any = this.date.getDate();
  yearSelected:any
  isChecked: boolean = false;
  working: boolean = false;
  extendServices: boolean = false;
  fullDate: any;
  selectedItem: any;
  services: any[] = [];
  nextFourDays: any[] = [];
  nextDaysOfIndex: any = [];
  timeSelected: any;
  dialogRef!: MatDialogRef<any>;

  selectedService: string = '';

  constructor(
    private location: Location,
    private renderer: Renderer2,
    private el: ElementRef,
    private http: HttpClient,
    public dialog: MatDialog,
    private jobDetailsService: JobDetailsService,
    private userService:UserDetailsService
  ) {}

  extend() {
    this.extendServices = !this.extendServices;
  }

  openServiceDialog(): void {
    this.dialogRef = this.dialog.open(this.dialogTemplate);

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.services = result;
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.services);
  }

  ngOnInit(): void {
    this.getDetails();
    this.getNextFourDays();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.daySelected = days[this.date.getDay()];
    this.getSelectedService();
  }

  timing: any[] = [
    { time: '07:00AM - 10:00AM', isSelected: false },
    { time: '10:00AM - 01:00PM', isSelected: false },
    { time: '01:00PM - 04:00PM', isSelected: false },
    { time: '04:00PM - 07:00PM', isSelected: false }
  ];

  getSelectedService() {
    this.userService.getWork(localStorage.getItem('providerId')).subscribe(
      (response)=>{
          console.log(response);
        //  console.log(response[0].works);
        
         this.services=response[0].works
      },(err)=>{
        console.log(err);
      }
    )
    
    // const demo = { nameOfService: 'cleaning' };
    // this.services.push(demo);
  }

  availabilityService(serviceName: string) {
    this.selectedService = serviceName;
    this.showAvailabilityForService(serviceName);
  }

  getNextFourDays() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();

    for (let i = 0; i < 10; i++) {
      const currentDay = new Date(today);
      currentDay.setDate(today.getDate() + i);
      const formattedDate = this.formatDate(currentDay);
      this.nextFourDays.push({
        date: formattedDate,
        day: days[currentDay.getDay()],
        workingStaus: false,
        timming: this.timing.map(t => ({ ...t }))
      });
    }
    this.nextDaysOfIndex = this.nextFourDays[this.selectedIndex];
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const month = date.toLocaleDateString('default', { month: 'long' });
    
    return `${day}-${month}-${year}`;
  }

  selectedIndex: number = 0;

  selected(item: any, index: any) {
    console.log(item);
    this.isChecked = false;
    if (item.workingStaus) {
      this.working = true;
    } else {
      this.working = false;
    }
    this.selectedIndex = index;
    this.dateSelected = item.date.toString().split('-')[0];
    this.daySelected = item.day;
    this.monthSelected = item.date.toString().split('-')[1];
    this.yearSelected=item.date.toString().split('-')[2];
    this.nextDaysOfIndex = this.nextFourDays[this.selectedIndex];
    console.log(this.nextDaysOfIndex);
    console.log(this.monthSelected);
  }

  workingChange() {
    this.nextFourDays[this.selectedIndex].workingStaus = !this.nextFourDays[this.selectedIndex].workingStaus;
  }

  // onToggleChange(event: MatSlideToggleChange, item: any) {
  //   if (event.checked) {
  //     this.timeSelected = item.time;
  //   } else {
  //     this.timeSelected = ""
  //   }
    
  //   // Update all instances of the same time slot across different days
  //   this.nextFourDays.forEach(day => {
  //     day.timming.forEach((timeSlot: any) => {
  //       if (timeSlot.time === item.time) {
  //         timeSlot.isSelected = event.checked;
  //       }
  //     });
  //   });
  //   console.log(this.dateSelected);
  //   const currentDate = new Date(`${this.monthSelected} ${this.dateSelected} ${this.yearSelected}`);
  //   currentDate.setDate(this.dateSelected);
  //   const day = currentDate.getDate();
  //   const month = currentDate.getMonth() + 1;
  //   const year = this.yearSelected;
  //   this.fullDate = `${year}-${month}-${day}`;
  //   console.log(month);
  // }
  onToggleChange(event: MatSlideToggleChange, item: any) {
    if (event.checked) {
        this.timeSelected = item.time;
    } else {
        this.timeSelected = "";
    }

    // Update all instances of the same time slot across different days
    this.nextFourDays.forEach(day => {
        day.timming.forEach((timeSlot: any) => {
            if (timeSlot.time === item.time) {
                timeSlot.isSelected = event.checked;
            }
        });
    });

    console.log(this.dateSelected);

    const currentDate = new Date(`${this.monthSelected} ${this.dateSelected} ${this.yearSelected}`);
    currentDate.setDate(this.dateSelected);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Adjust month to be 1-based

    // Add leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const year = this.yearSelected;
    this.fullDate = `${year}-${formattedMonth}-${formattedDay}`;
    console.log(formattedMonth);
}

  submitAllData() {
    console.log(this.checkDuplicate(this.fullDate, this.timeSelected, this.selectedService));
    if (this.checkDuplicate(this.fullDate, this.timeSelected, this.selectedService)) {
      alert('The same time slot on the selected date for the selected service is already taken.');
      
    }
    else{
      this.sendingData();
    }
    // this.sendingData();
  }

  api=''
  sendingData() {
    if (this.timeSelected!="") {
      this.api = 'https://api.coolieno1.in/v1.0/providers/provider-date';
    } else {
      this.api = 'https://api.coolieno1.in/v1.0/providers/provider-date//delete';
    }
   
    const requestBody = {
      userId: this.userId,
      service: this.selectedService,
      date: this.fullDate,
      work: this.working,
      time: this.timeSelected
    };
    console.log(requestBody);
    console.log(this.api);
    this.http.post(this.api, requestBody).subscribe(
      response => {
        console.log(response);
        this.getDetails();
      },
      error => {
        console.log(error);
      }
    );
  }

  availabilityResponse: any[] = [];
  getDetails() {
    const api = `https://api.coolieno1.in/v1.0/providers/provider-date/${this.userId}`;
    this.http.get<any>(api).subscribe(
      response => {
        console.log(response);
        this.availabilityResponse = response;
        this.showAvailability(this.availabilityResponse);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteData() {}

  // showAvailability(response: any) {
  //   console.log(this.services);
  //   response.forEach((element: any) => {
  //     const dayString = element.date;
  //     const onlyDate = new Date(dayString);
  //     const day = onlyDate.getDate();

  //     this.nextFourDays.forEach((item: { date: string; workingStaus: boolean; timming: any }) => {
  //       const dateFromFe = item.date.split('-')[0];
  //       if (day.toString() === dateFromFe) {
  //         item.workingStaus = true;
  //         this.working = true;

  //         item.timming.forEach((time: any) => {
  //           if (time.time === element.time) {
  //             const indexOfMatch = this.nextFourDays.indexOf(item);
  //             const indexOfTime = this.nextFourDays[indexOfMatch].timming.indexOf(time);
  //             if (this.nextFourDays[indexOfMatch].timming[indexOfTime].time == element.time) {
  //               this.nextFourDays[indexOfMatch].timming[indexOfTime].isSelected = true;
  //             }
  //           }
  //         });
  //       }
  //     });
  //   });
  // }
  showAvailability(response: any) {
    console.log(this.services);
  
    response.forEach((element: any) => {
      const dayString = element.date;
      const onlyDate = new Date(dayString);
      const day = onlyDate.getDate();
      const month = onlyDate.toLocaleDateString('default', { month: 'long' });
      const formattedDate = `${String(day).padStart(2, '0')}-${month}-${onlyDate.getFullYear()}`;
  
      this.nextFourDays.forEach((item: { date: string; workingStaus: boolean; timming: any }) => {
        if (formattedDate === item.date) {
          item.workingStaus = true;
          this.working = true;
  
          item.timming.forEach((time: any) => {
            if (time.time === element.time) {
              const indexOfMatch = this.nextFourDays.indexOf(item);
              const indexOfTime = this.nextFourDays[indexOfMatch].timming.indexOf(time);
              if (this.nextFourDays[indexOfMatch].timming[indexOfTime].time === element.time) {
                this.nextFourDays[indexOfMatch].timming[indexOfTime].isSelected = true;
              }
            }
          });
        }
      });
    });
  }
  
  showAvailabilityForService(serviceName: string) {
    // // Reset the availability
    // this.nextFourDays.forEach(day => {
    //   day.workingStaus = false;
    //   day.timming.forEach((time: any) => {
    //     time.isSelected = false;
    //   });
    // });

    // // Set availability based on the selected service
    // console.log(this.availabilityResponse);
    // this.availabilityResponse.forEach((element: any) => {
    //   if (element.service === serviceName) {
    //     const dayString = element.date;
    //     const onlyDate = new Date(dayString);
    //     const day = onlyDate.getDate();

    //     this.nextFourDays.forEach((item: { date: string; workingStaus: boolean; timming: any }) => {
    //       const dateFromFe = item.date.split('-')[0];
    //       if (day.toString() === dateFromFe) {
    //         item.workingStaus = true;
    //         item.timming.forEach((time: any) => {
    //           if (time.time === element.time) {
    //             time.isSelected = true;
    //           }
    //         });
    //       }
    //     });
    //   }
    // });
    console.log("new called");
    this.nextFourDays.forEach(day => {
      day.workingStaus = false;
      day.timming.forEach((time: any) => {
        time.isSelected = false;
      });
    });
  
    // Set availability based on the selected service
    console.log(this.availabilityResponse);
    this.availabilityResponse.forEach((element: any) => {
      if (element.service === serviceName) {
        const dayString = element.date;
        const onlyDate = new Date(dayString);
        const day = onlyDate.getDate();
        const month = onlyDate.toLocaleDateString('default', { month: 'long' });
        const formattedDate = `${String(day).padStart(2, '0')}-${month}-${onlyDate.getFullYear()}`;
  
        this.nextFourDays.forEach((item: { date: string; workingStaus: boolean; timming: any }) => {
          if (formattedDate === item.date) {
            item.workingStaus = true;
            item.timming.forEach((time: any) => {
              if (time.time === element.time) {
                time.isSelected = true;
              }
            });
          }
        });
      }
    });
  }

  checkDuplicate(date: string, time: string, service: string): boolean {
    let present=false
     this.availabilityResponse.some(item =>{
      // console.log("inside");
      // console.log("item",item.date.split('T')[0],item.time,"seleted",date,time);
      if(item.date.split('T')[0].toString() == date && item.time.toString() == time){
        console.log("present",true);
        present=true
      } 
  });
  return present
  }

  navToBack(){
   this.location.back()
  }
}
