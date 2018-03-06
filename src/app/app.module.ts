import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { ROUTER } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    CardPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
