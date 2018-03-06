export class PaymentModel {
    constructor(
        private amount : number,
        private name : string,
        private cardNumber : number,
        private expiration : string,
        private securityCode : number,
        private postalCode : number,
        private cardType : string
    ){

    }

    get getCardType() : string {
        return this.cardType;
    }

    set setCardType(cardType : string){
        this.cardType = cardType;
    }
}
