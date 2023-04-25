import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
//api link
baseUrl:string="http://localhost:9090/api/customer/";

  constructor(private http:HttpClient) { }
  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl);
   }
   getCustomerById(id:number):Observable<Customer>{
     return this.http.get<Customer>(this.baseUrl+id);
    }
   deleteCustById(id:number){
     return this.http.delete(this.baseUrl+id);
   }
   saveCustomer(cust:Customer){
     return this.http.post(this.baseUrl,cust);
   }
   updateCustomer(cust:Customer,id:number){
     return this.http.put(this.baseUrl+id,cust)
   }
}
