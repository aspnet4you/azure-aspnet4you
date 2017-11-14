import { Injectable } from '@angular/core';
import { Address } from './address';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
  
  // Resolve HTTP using the constructor
  constructor(private http: HttpClient) {
  }

  private baseAddressBookUrl = 'http://api.aspnet4you.com/api/addressbook/';

  getAddresses(): Observable<Address[]>{
    // set the headers required to pass CORS. Don't forget to add the origins at the api (server)!
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

    return this.http.get(this.baseAddressBookUrl +'GetAllAddresses', { headers})
      .map((data: any) => data)
      //...errors if any
      .catch((error: any) => Observable.throw(error || 'Server error: Something went wrong, can not get the data'));
  }

  getAddress(id: number): Observable<Address>
  {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

    return this.http.get(this.baseAddressBookUrl +'GetAddressById/Id?Id=' +id, { headers })
      .map((data: any) => data)
      //...errors if any
      .catch((error: any) => Observable.throw(error || 'Server error: Something went wrong, can not get the data'));
  }
}
