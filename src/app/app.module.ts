import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import MatProgressSpinnerModule
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LanguageComponent } from './language/language.component';
import { LogInComponent } from './log-in/log-in.component';
import { VerifyComponent } from './verify/verify.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { SelectWorkComponent } from './select-work/select-work.component';
import { AboutWorkComponent } from './about-work/about-work.component';
import { WorkExperianceComponent } from './work-experiance/work-experiance.component';
import { AadharVerificationComponent } from './aadhar-verification/aadhar-verification.component';
import { PancardComponent } from './pancard/pancard.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { HomeComponent } from './home/home.component';
import { FotterComponent } from './fotter/fotter.component';
import { CreditComponent } from './credit/credit.component';
import { MenuComponent } from './menu/menu.component';
import { VisitingCardComponent } from './visiting-card/visiting-card.component';
import { ReferAndEarnComponent } from './refer-and-earn/refer-and-earn.component';
import { AwardsComponent } from './awards/awards.component';
import { HelpsComponent } from './helps/helps.component';
import { TargetComponent } from './target/target.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EarningsComponent } from './earnings/earnings.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LanguageComponent,
    LogInComponent,
    VerifyComponent,
    AboutUserComponent,
    SelectWorkComponent,
    AboutWorkComponent,
    WorkExperianceComponent,
    AadharVerificationComponent,
    PancardComponent,
    BankDetailsComponent,
    HomeComponent,
    FotterComponent,
    CreditComponent,
    MenuComponent,
    VisitingCardComponent,
    ReferAndEarnComponent,
    AwardsComponent,
    HelpsComponent,
    TargetComponent,
    EarningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
