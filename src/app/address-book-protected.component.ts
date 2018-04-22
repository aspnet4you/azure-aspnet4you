import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Address } from './address';
import { AddressBookService } from './address-book.service';
import { GoogleAnalyticsEventsService } from "./app-googleanalytics.service";

@Component({
  selector: 'app-address-list-protected',
  templateUrl: './address-list.component.html',
  providers: [AddressBookService]
})

export class ProtectedAddressBookComponent implements OnInit {
  addresses: Address[];
  selectedAddress: Address;
  title: string = "Prodip's Protected (by Jwt oAuth Token) Angular AddressBook";

  constructor(private service: AddressBookService, private gaEventsService: GoogleAnalyticsEventsService) { }

  ngOnInit() {
    this.service.getAddresses(true)
      .subscribe(
      addrs => {
        this.addresses = addrs;
        this.gaEventsService.emitEvent("ProtectedAddress", "Retrieve", "Address Count:" + this.addresses.length);
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
        this.gaEventsService.emitEvent("ProtectedAddress", "Error", err);
      });
  }

  // Need for events
  selectAddress(address: Address) {
    this.selectedAddress = address;
    this.gaEventsService.emitEvent("ProtectedAddress", "selectedAddress", this.selectedAddress.name);
  }

  getErrorMsg() {
    return this.service.getErrorMsg();
  }

  getSuccessMsge() {
    return this.service.getSuccessMsge();
  }
}
