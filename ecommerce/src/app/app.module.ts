import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './webpage/homepage/homepage.component';
import { ProductpageComponent } from './webpage/productpage/productpage.component';
import { LoginpageComponent } from './webpage/loginpage/loginpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductholderComponent } from './productholder/productholder.component';
import { CartpageComponent } from './webpage/cartpage/cartpage.component';
import { FooterComponent } from './footer/footer.component';
import { SignuppageComponent } from './webpage/signuppage/signuppage.component';
import { ThankyoupageComponent } from './webpage/thankyoupage/thankyoupage.component';
import { ProfilepageComponent } from './webpage/profilepage/profilepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductpageComponent,
    LoginpageComponent,
    NavbarComponent,
    ProductholderComponent,
    CartpageComponent,
    FooterComponent,
    SignuppageComponent,
    ThankyoupageComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
