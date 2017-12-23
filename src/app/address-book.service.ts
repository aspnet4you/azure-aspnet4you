import { Injectable } from '@angular/core';
import { Address } from './address';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie-service';

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

  errorMsg: string;
  successMsg: string;
  static goodMsg: string = "Successfully retrieved addresses.";
  static badMsg: string = "Server error: Something went wrong, can not get the data. May be you have not logged in! Look at the console for details."; 

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  private baseAddressBookUrl = environment.apiDomain + '/api/addressbook/';

  getAddresses(isProtected: boolean = false): Observable<Address[]>{
    // set the headers required to pass CORS. Don't forget to add the origins at the api (server)!
    var token = this.cookieService.get("access_token");
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization')
      .append('Access-Control-Allow-Credentials', 'true');

    if (token != "undefined" &&token !="" && token != null) {
      headers = headers.append('Authorization', 'Bearer ' +token);
    }

    let actionName = "GetAllAddresses";
    if (isProtected) {
      actionName = "GetProtectedAddresses";
    }

    return this.http.get(this.baseAddressBookUrl + actionName, { headers})
      .map((data: any) => {
        this.successMsg = AddressBookService.goodMsg;
        console.log(AddressBookService.goodMsg + " @" + actionName);
        return data;
      })
      //...errors if any
      .catch((error: any) => {
        this.errorMsg = AddressBookService.badMsg;
        console.log(error || AddressBookService.badMsg);
        return Observable.throw(AddressBookService.badMsg)
      });
  }

  getAddress(id: number): Observable<Address>
  {
    var token = this.cookieService.get("access_token");
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization')
      .append('Access-Control-Allow-Credentials', 'true');

    if (token != "undefined" && token != "" && token != null) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }

    let actionName = "GetAddressById/Id?Id=";

    return this.http.get(this.baseAddressBookUrl + actionName +id, { headers })
      .map((data: any) => {
        this.successMsg = AddressBookService.goodMsg;
        console.log(AddressBookService.goodMsg + " @" + actionName);
        return data;
      })
      //...errors if any
      .catch((error: any) => {
        this.errorMsg = AddressBookService.badMsg;
        console.log(error || AddressBookService.badMsg);
        return Observable.throw(error || AddressBookService.badMsg);
      });
  }

  getErrorMsg() {
    return this.errorMsg;
  }

  getSuccessMsge() {
    return this.successMsg;
  }
}
