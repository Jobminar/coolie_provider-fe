import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { EarningsComponent } from './earnings/earnings.component';


const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'language',component:LanguageComponent},
  {path:'log-in',component:LogInComponent},
  {path:'verify',component:VerifyComponent},
  {path:'aboutUser',component:AboutUserComponent},
  {path:'selectWork',component:SelectWorkComponent},
  {path:'aboutWork',component:AboutWorkComponent},
  {path:'workExperiance',component:WorkExperianceComponent},
  {path:'aadharVerify',component:AadharVerificationComponent},
  {path:'pancard',component:PancardComponent},
  {path:'bankDetails',component:BankDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'fotter',component:FotterComponent},
  {path:'credits',component:CreditComponent},
  {path:'menu',component:MenuComponent},
  {path:'visitingCard',component:VisitingCardComponent},
  {path:'referAndEarn',component:ReferAndEarnComponent},
  {path:'awards',component:AwardsComponent},
  {path:'help',component:HelpsComponent},
  {path:'target',component:TargetComponent},
  {path:'earnings',component:EarningsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
