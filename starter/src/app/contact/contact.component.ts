import { Component } from '@angular/core';
import { Address, AddressService } from '../services/address.service'

@Component({
    selector: 'my-contact',
    templateUrl: './contact.component.html',
    providers: [AddressService],
    styleUrls: ['../app.component.css']
})
export class ContactComponent {

    addresses: Address[];
    selectedAddress: Address;

    constructor(addrService: AddressService) {
        this.addresses = addrService.getAddresses()
    }

    onSelect(addr: Address): void {
        this.selectedAddress = addr;
    }
}