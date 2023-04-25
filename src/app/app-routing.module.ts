import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { CustlistComponent } from './custlist/custlist.component';
import { EditcustComponent } from './editcust/editcust.component';
import { AddcustComponent } from './addcust/addcust.component';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';



const routes: Routes = [{path:"list",component:CustlistComponent},
{path:'', component: HomeComponent},
{path:"addcust",component:AddcustComponent},
{path:'details/:id',component:CustdetailsComponent},
{path:'edit/:id',component:EditcustComponent},
{path:'food/:id', component:FoodpageComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
