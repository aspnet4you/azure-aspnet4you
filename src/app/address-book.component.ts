import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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
    this.service.getAddresses()
      .subscribe(
      addrs => this.addresses = addrs, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  // Need for events
  selectAddress(address: Address) { this.selectedAddress = address; }
}
