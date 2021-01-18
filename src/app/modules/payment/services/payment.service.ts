import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  payment(idOrder:string,amount:number):boolean
  {
    
    return true;

  }
}
