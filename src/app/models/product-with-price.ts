export class ProductWithPrice {
    constructor(
        public productId: string,
        public active: boolean,
        public image: string,
        public productName: string,
        public priceId: string,
        public unitAmount: number,
        public unitAmountDecimal: number,
    ) { }
}