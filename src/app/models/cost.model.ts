import { PriceData } from "./price-data.model";

export class Cost {
    constructor(
        public url: string,
        public object: string,
        public hasMore: boolean,
        public priceData: PriceData[],
    ) { }
}