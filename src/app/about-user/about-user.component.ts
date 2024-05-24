import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrl: './about-user.component.css'
})
export class AboutUserComponent implements OnInit{
  aboutProvider!:FormGroup

  constructor( private fb:FormBuilder,
                private router:Router
  )
  {
   
  }
  ngOnInit(): void {
    this.aboutProvider = this.fb.group({
      providerName: ['', Validators.required],
      work: ['', [Validators.required, Validators.email]],
      pincode: ['', Validators.required]
    });
  }
  navTo()
  {
    this.router.navigate(['selectWork']);
  }
}
