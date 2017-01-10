import {Injectable} from '@angular/core';

export class Address {
    constructor(
        public id: number,
        public street1: string,
        public street2: string,
        public city: string,
        public state: string,
        public country: string,
        public zipcode: number) {
    }
}

@Injectable()
export class AddressService {
    getAddresses(): Address[] {
        return addresses.map(a => new Address(a.id, a.street1, a.street2, a.city, a.state, a.country, a.zipcode));
    }

    getAddressById(addrId: number): Address {
        return addresses.find(a => a.id === addrId);
    }
}

let addresses = [
    {id: 1, street1: "220 Dunaway Pl", street2: "", city: "San Francisco", state: "CA", country: "USA", zipcode: 95002},
    {id: 2, street1: "20043 Merritt Dr", street2: "", city: "Sunnyvale", state: "CA", country: "USA", zipcode: 95014},
    {id: 3, street1: "11111 Edinburgh Cir", street2: "", city: "San Ramon", state: "TX", country: "USA", zipcode: 66072},
    {id: 4, street1: "4693 Fenwood Dr", street2: "", city: "Denver", state: "CO", country: "USA", zipcode: 80130},
    {id: 5, street1: "5260 E. Hope Ave", street2: "", city: "Phoenix", state: "AZ", country: "USA", zipcode: 56920},
    {id: 6, street1: "999 Broadway St", street2: "", city: "New York", state: "NY", country: "USA", zipcode: 11001},
];

