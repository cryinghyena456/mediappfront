import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustlistComponent } from './custlist/custlist.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { EditcustComponent } from './editcust/editcust.component';
import { AddcustComponent } from './addcust/addcust.component';
import {  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
@NgModule({
  declarations: [
    AppComponent,
    CustlistComponent,
    CustdetailsComponent,
    EditcustComponent,
    AddcustComponent,
    HeaderComponent,
    HomeComponent,
    FoodpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
