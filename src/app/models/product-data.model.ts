export class ProductData {
    constructor(
        public  id: string,
        public object: string,
        public active: boolean,
        public created: number,
        public defaultPrice: String,
        public description: String,
        public images: String[],
        public features: String[],
        public livemode: boolean,
        public metadata: Map<String, String>,
        public name: String,
        public shippable: Boolean,
        public statementDescriptor: String,
        public taxCode: String,
        public unitLabel: String,
        public updated: number,
        public url: string ,
        public attributes: String[],
        public caption: string,
        public deactivateOn: String[],
        public deleted: boolean
    ) {}
}