import { Injectable } from '@angular/core';
import { Address } from './address';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Addresses = [
  { name: "John", phone: "214-555-1212", city: "Dallas" },
  { name: 'Chuck', phone: '972-444-1212', city: 'Plano' },
  { name: 'Kelly', phone: '214-678-1212', city: 'Lewisville' },
  { name: 'Robert', phone: '469-345-1212', city: 'Frisco' },
  { name: 'Prodip', phone: '972-546-1212', city: 'The Colony' },
  { name: 'Sreeni', phone: '469-512-1212', city: 'Mansfield' },
  { name: 'Ravi', phone: '214-456-1212', city: 'Grapevine' }
];

var Addresses2: Address[];

@Injectable()
export class AddressBookService {

  constructor(private http: HttpClient) {
  }

  getAddresses() {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers = headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

    this.http.get<Address[]>("http://api.aspnet4you.com/api/addressbook/GetAllAddresses", { headers: headers })
      .subscribe(
      data => { console.log(data); Addresses2 = data },
      error => { console.log('Something went wrong, can not get the data!');}
      );
      

    return Addresses2;
  }

  getAddress(name: string)
  {
    let findAddress = Addresses2.filter(a => a.name === name);

    if (findAddress.length > 0) {
      return Addresses[0];
    }
  }
}
