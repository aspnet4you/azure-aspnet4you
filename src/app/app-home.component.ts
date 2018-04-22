import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsEventsService } from "./app-googleanalytics.service";

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html'
})

export class AppHomeComponent implements OnInit {

  constructor(private gaEventsService: GoogleAnalyticsEventsService) {

  }

  ngOnInit(): void {
    this.gaEventsService.emitEvent("Home", "ngOnInit", "You are at home component!", 1);
  }

}
