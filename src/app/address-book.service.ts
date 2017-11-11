import { Injectable } from '@angular/core';
import { Address } from './address';

const Addresses = [
  { name: "John", phone: "214-555-1212", city: "Dallas" },
  { name: 'Chuck', phone: '972-444-1212', city: 'Plano' },
  { name: 'Kelly', phone: '214-678-1212', city: 'Lewisville' },
  { name: 'Robert', phone: '469-345-1212', city: 'Frisco' },
  { name: 'Prodip', phone: '972-546-1212', city: 'The Colony' },
  { name: 'Sreeni', phone: '469-512-1212', city: 'Mansfield' },
  { name: 'Ravi', phone: '214-456-1212', city: 'Grapevine' }
];

@Injectable()
export class AddressBookService {
  getAddresses() { return Addresses; }

  getAddress(name: string)
  {
    let findAddress = Addresses.filter(a => a.name === name);

    if (findAddress.length > 0) {
      return Addresses[0];
    }
  }
}
