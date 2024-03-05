import { AddressModel } from './address.model';

export class BranchModel {
    constructor(
        public id: string,
        public name: string,
        public address: AddressModel
    ) { }
}