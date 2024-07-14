import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraniningService } from '../tranining.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{
  base64Image: string | ArrayBuffer | null = null;

  @Input() rating: number = 4.89;
  @Input() minRating: number = 4.7;
  radius: number = 120; // Adjusted for the semi-circle
  circumference: number = Math.PI * this.radius; // Half circumference
  offset: number = 0;

  ngOnInit(): void {
    this.setProgress(this.rating);
  }

  setProgress(rating: number): void {
    const progress = (rating / 5) * 100;
    this.offset = this.circumference - (progress / 100) * this.circumference;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
