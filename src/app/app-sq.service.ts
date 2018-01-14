import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';
import { StockQuotes, StockQuotesProxy } from './stockquotes';
import { StockSymbols } from './StockSymbols';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StockQuotesService {
  
  private errorMsg: string;
  private successMsg: string;
  private static goodMsg: string = "Successfully received quotes.";
  private static badMsg: string = "Server error: Something went wrong, can not get the data. Look at the console for details."; 


  // Resolve HTTP using the constructor
  constructor(private http: HttpClient) {
  }

  private sqUrl = environment.stockQuoteUrl;
  private sqStockSymbolsUrl = environment.stockSymbolsUrl;

  getQuotes(sqsymbol: string = 'MSFT'): Observable<StockQuotes> {
    // set the headers required to pass CORS. Don't forget to add the origins at the api (server)!
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization')
      .append('Access-Control-Allow-Credentials', 'true');

    return this.http.get(this.sqUrl + sqsymbol, { headers })
      .map((data: any) => {
        this.successMsg = StockQuotesService.goodMsg;
        console.log(StockQuotesService.goodMsg);
        let sQuote: StockQuotes = data; //StockQuotesProxy.Create(data);

        //for (let [key, value] of Object.entries(sQuote)) {
        //  console.log(key + ':' + value);
        //}

        return sQuote;
      })
      //...errors if any
      .catch((error: any) => {
        this.errorMsg = StockQuotesService.badMsg;
        console.log(error || StockQuotesService.badMsg);
        return Observable.throw(StockQuotesService.badMsg)
      });
  }

  getStockSymbols(): Observable<StockSymbols[]> {
    // set the headers required to pass CORS. Don't forget to add the origins at the api (server)!
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization')
      .append('Access-Control-Allow-Credentials', 'true');

    return this.http.get(this.sqStockSymbolsUrl, { headers })
      .map((data: any) => {
        this.successMsg = StockQuotesService.goodMsg;
        console.log(StockQuotesService.goodMsg);
        let stockSymbols: StockSymbols[] = data;

        //for (let symbol of stockSymbols) {
        //  console.log(symbol.symbol);
        //}
       
        return stockSymbols;
      })
      //...errors if any
      .catch((error: any) => {
        this.errorMsg = StockQuotesService.badMsg;
        console.log(error || StockQuotesService.badMsg);
        return Observable.throw(StockQuotesService.badMsg)
      });
  }

  getErrorMsg() {
    return this.errorMsg;
  }

  getSuccessMsge() {
    return this.successMsg;
  }
}
