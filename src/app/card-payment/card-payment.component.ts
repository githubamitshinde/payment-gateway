import { Component, OnInit } from '@angular/core';
import { PaymentModel } from './payment.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  private payment : PaymentModel;

  constructor(private http:HttpClient) { 
    this.payment = new PaymentModel(101.00, 'David Martin', 1234123112311145,'04-04-2025',321,19702,'visa');
  }

  ngOnInit() {
  }

  onSubmit(paymentForm : NgForm){
    console.log(paymentForm);
    //call REST service
    //this.http.post('', JSON.stringify(this.payment));
  }

  onChangeCardType(cardType : string){
    this.payment.setCardType = cardType;
    console.log(this.payment);
  }
}
