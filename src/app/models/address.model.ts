export class AddressModel {
    constructor(
        public id: string,
        public street: string,
        public city: string,
        public state: string,
        public zipCode: string,
        public number: string,
        public district: string
    ) { }
}