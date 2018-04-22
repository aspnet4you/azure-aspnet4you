import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Address } from './address';
import { AddressBookService } from './address-book.service';
import { GoogleAnalyticsEventsService } from "./app-googleanalytics.service";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  providers: [AddressBookService]
})

export class AddressBookComponent implements OnInit {
  addresses: Address[];
  selectedAddress: Address;
  title: string = "Prodip's Angular AddressBook";

  constructor(private service: AddressBookService, private gaEventsService: GoogleAnalyticsEventsService) { }

  ngOnInit() {
    this.service.getAddresses(false)
      .subscribe(
      addrs => {
        this.addresses = addrs;
        this.gaEventsService.emitEvent("Address", "Retrieve", "Address Count:" + this.addresses.length);
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
        this.gaEventsService.emitEvent("Address", "Error", err);
      });
  }

  // Need for events
  selectAddress(address: Address) {
    this.selectedAddress = address;
    this.gaEventsService.emitEvent("Address", "selectedAddress", this.selectedAddress.name);
  }

  getErrorMsg() {
    return this.service.getErrorMsg();
  }

  getSuccessMsge() {
    return this.service.getSuccessMsge();
  }
}
