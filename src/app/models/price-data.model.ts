import { Recurring } from "./recurring.model";

export class PriceData {
    constructor(
        public id: string,
        public object: string,
        public active: boolean,
        public billingScheme: string,
        public created: number, 
        public currency: string,
        public customUnitAmount: number,
        public livemode: boolean,
        public lookupKey: string,
        public metadata: { [key: string]: any }, 
        public nickname: string,
        public product: string,
        public recurring: Recurring, 
        public taxBehavior: string,
        public tiersMode: string,
        public transformQuantity: string,
        public type: string,
        public unitAmount: number,
        public unitAmountDecimal: number
    ) {}
}
  