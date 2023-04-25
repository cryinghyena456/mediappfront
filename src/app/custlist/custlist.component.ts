import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';


@Component({
  selector: 'app-custlist',
  templateUrl: './custlist.component.html',
  styleUrls: ['./custlist.component.css']
})
export class CustlistComponent implements OnInit{

   //injected service dependency in comp
   constructor(private service:CustomerService) { }

   customers:Customer[];
 
   ngOnInit(): void {
     this.service.getAllCustomers().subscribe(data=>this.customers=data);
   }
 
   delete(id:number){
     this.customers=this.customers.filter(c=>c.id!==id)
     this.service.deleteCustById(id).subscribe(data=>console.log(data))
   }

}
