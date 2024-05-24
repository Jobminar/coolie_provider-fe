import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.css'
})
export class BankDetailsComponent {
  bankDetails!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bankDetails = this.fb.group({
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      PANNumber:'',
      bankName:'',
      IFSC:'',
      branch:''
    });
  }
}
