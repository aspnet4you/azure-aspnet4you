import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';
import { JwtAuthToken } from './jwt-token';
import { environment } from '../environments/environment';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observer } from 'rxjs';
import { OauthLoginService } from './oauth-login.service';

@Component({
  selector: 'oauth-logins',
  templateUrl: './oauth-login.component.html'
})

export class OauthLoginComponent implements OnInit, OnDestroy{

  private access_token: string;
  private childWindowHandle: Window;
  _jwtToken: JwtAuthToken;
  private loginUrl = environment.apiDomain + "/Account/Login?returnUrl=" +environment.returnUrl;

  constructor(private activeRoute: ActivatedRoute, private cookies: CookieService, private oauthService: OauthLoginService) {
    activeRoute.queryParams.subscribe((params: Params) => {
      this.access_token = params['access_token'];
      this.processToken(this.access_token);
      this._jwtToken = this.decodeToken();
    }
    ); 
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    
  }

  processToken(eToken: string) {
    if (eToken != "undefined" && eToken != "" && eToken != null) {
      let eTokenData = eToken.split('.')[1];
      let eTokenJwtJsonData = window.atob(eTokenData);
      let eTokenJwtData = JSON.parse(eTokenJwtJsonData);
      let expiries = eTokenJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/expiration"];
      console.log(expiries); //59.23:59:59
      let dd = expiries.split('.')[0];
      let dpart2 = expiries.split('.')[1];
      let hh = dpart2.split(':')[0];
      let mm = dpart2.split(':')[1];
      let ss = dpart2.split(':')[2];

      let expDate = new Date();
      expDate.setHours((parseInt(dd) * 24 + parseInt(hh)), mm, ss);

      console.log(eToken)

      console.log(environment.cookieDomain);

      this.cookies.set("access_token", eToken, expDate, null, environment.cookieDomain, environment.secureCookie);
      console.log(this.cookies.get("access_token"));
     
      window.opener.location.reload();
      self.close();
    }
  }

  getToken(): string {
    return this.access_token;
  }

  logout() {
    this.oauthService.signOut();
    if (this.getSuccessMsge() == this.oauthService.successMsg) {
      this.cookies.delete("access_token", null, environment.cookieDomain);
      this.access_token = null;
      this._jwtToken = null;
    }
  }

  getErrorMsg() {
    return this.oauthService.getErrorMsg();
  }

  getSuccessMsge() {
    return this.oauthService.getSuccessMsge();
  }

  decodeToken(): JwtAuthToken {
    var jwtToken: JwtAuthToken = null;
    var jwt: string = this.cookies.get("access_token");
    if (jwt != "undefined" && jwt !="" && jwt != null) {
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);

      jwtToken = new JwtAuthToken();
      jwtToken.aud = decodedJwtData.aud;
      jwtToken.iss = decodedJwtData.iss;
      jwtToken.givenname = decodedJwtData["given_name"];
      jwtToken.surname = decodedJwtData["family_name"];
      jwtToken.emailaddress = decodedJwtData["email"];
      jwtToken.expiration = decodedJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/expiration"];
      jwtToken.exp = decodedJwtData.exp;
      jwtToken.accesstoken = decodedJwtData["urn:linkedin:accesstoken"];

      this._jwtToken = jwtToken;
      console.log(jwtToken);
    }

    return jwtToken;
  }

  oauthPopUp(url: string = this.loginUrl) {
    this.childWindowHandle = window.open(url, '_blank', 'width=400,height=400,left=100,top=100');
    this.childWindowHandle.document.title = "oAuth Login via api.aspnet4you.com!";
  }

}

