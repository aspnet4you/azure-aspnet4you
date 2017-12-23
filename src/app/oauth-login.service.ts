import { Injectable } from '@angular/core';
import { Address } from './address';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class OauthLoginService {
  
  errorMsg: string;
  successMsg: string;
  static goodMsg: string = "Successfully signed off.";
  static badMsg: string = "Server error: Something went wrong, can not get the data. Look at the console for details."; 


  // Resolve HTTP using the constructor
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  private baseAddressBookUrl = environment.apiDomain +'/Account/SignOff';

  signOut() {
    // set the headers required to pass CORS. Don't forget to add the origins at the api (server)!
    var token = this.cookieService.get("access_token");
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization')
      .append('Access-Control-Allow-Credentials', 'true');

    if (token != "undefined" && token != "" && token != null) {
      headers = headers.append('Authorization', +'Bearer ' +token);
    }

    
    this.http.post(this.baseAddressBookUrl, { headers:headers, withCredentials: true })
      .subscribe(
      () => { }
      , (error: any) => {
        this.errorMsg = OauthLoginService.badMsg;
        console.log("Server error:" + error.message
        )}
      , () => {
        this.successMsg = OauthLoginService.goodMsg;
        console.log(OauthLoginService.goodMsg)
      }
    );
  }

  getErrorMsg() {
    return this.errorMsg;
  }

  getSuccessMsge() {
    return this.successMsg;
  }
}
