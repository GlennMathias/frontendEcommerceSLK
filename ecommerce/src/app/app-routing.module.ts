import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './webpage/homepage/homepage.component';
import { LoginpageComponent } from './webpage/loginpage/loginpage.component';
import { ProductholderComponent } from './productholder/productholder.component';
import { CartpageComponent } from './webpage/cartpage/cartpage.component';
import { SignuppageComponent } from './webpage/signuppage/signuppage.component';
import { ThankyoupageComponent } from './webpage/thankyoupage/thankyoupage.component';
import { ProfilepageComponent } from './webpage/profilepage/profilepage.component';


const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"product",component:ProductholderComponent},
  {path:"login",component:LoginpageComponent},
  {path:"home",component:HomepageComponent},
  {path:"cart",component:CartpageComponent},
  {path:"signUp",component:SignuppageComponent},
  {path:"thanks",component:ThankyoupageComponent},
  {path:"profile",component:ProfilepageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
