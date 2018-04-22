import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observer } from 'rxjs';
import { environment } from '../environments/environment';
import { StockQuotesService } from './app-sq.service';
import { StockQuotes, StockQuotesProxy } from './stockquotes';
import { DialogComponent } from './app-dialog.component';
import { GoogleAnalyticsEventsService } from "./app-googleanalytics.service";

@Component({
  selector: 'stock-quotes',
  templateUrl: './app-sq.component.html'
})

export class StockQuotesComponent implements OnInit, OnDestroy{

  public myStockQuotes: StockQuotes = null;
  public defaultSymbol: string = "MSFT";
  public showDialog: boolean = false;

  constructor(private sqService: StockQuotesService, private gaEventsService: GoogleAnalyticsEventsService) {

  }

  ngOnInit() {
    this.getStockQuotes('MSFT');
  }

  ngOnDestroy(): void {
    
  }

  getStockQuotes(sqsymbol: string = 'MSFT') {
    this.sqService.getQuotes(sqsymbol)
      .subscribe(
      quotes => {
        this.myStockQuotes = quotes;
        this.gaEventsService.emitEvent("StockQ", "Retrieve", sqsymbol);
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
        this.gaEventsService.emitEvent("StockQ", "Error", err);
      });
  }

  receiveMessage($event) {
    console.log("Symbol selected from dialog:" + $event);
    this.defaultSymbol = $event;
  }

  visibleChange($event) {
    console.log("visibleChange from dialog:" + $event);
    this.showDialog = $event;
  }

  getErrorMsg() {
    return this.sqService.getErrorMsg();
  }

  getSuccessMsge() {
    return this.sqService.getSuccessMsge();
  }
}

