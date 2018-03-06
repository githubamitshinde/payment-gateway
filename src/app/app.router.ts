import { Routes, RouterModule, RoutesRecognized } from '@angular/router';;
import { CardPaymentComponent } from './card-payment/card-payment.component';

export const ROUTER : Routes = [
    {
        path: 'makePayment', component: CardPaymentComponent
    }
];