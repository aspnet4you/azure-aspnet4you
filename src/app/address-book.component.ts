import { Component, OnInit } from '@angular/core';

import { Address } from './address';
import { AddressBookService } from './address-book.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  providers: [AddressBookService]
})

export class AddressBookComponent implements OnInit {
  addresses: Address[];
  selectedAddress: Address;

  constructor(private service: AddressBookService) { }

  ngOnInit() {
    this.addresses = this.service.getAddresses();
  }

  selectAddress(address: Address) { this.selectedAddress = address; }
}
