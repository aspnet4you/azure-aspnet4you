import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { GoogleAnalyticsEventsService } from "./app-googleanalytics.service";
import { Subscription } from 'rxjs/Subscription';
declare let ga: Function;

@Component({
  selector: 'app-root',
  template: `<div id="rcorners2">
            <img width=200 height=50 src="/assets/images/azure-aspnet4you.png" />
              <nav>
                <a routerLink="/home" routerLinkActive="active">Home</a>
                <a routerLink="/api" routerLinkActive="active">Api</a>
                <a routerLink="/blogs" routerLinkActive="active">Blogs</a>
                <a routerLink="/oauth" routerLinkActive="active">oAuth</a>
                <a routerLink="/quotes" routerLinkActive="active">StockQ</a>
              </nav>
            <router-outlet>
             
           </router-outlet>
          </div>` 
})
export class AppComponent implements OnInit, OnDestroy{

  subscription: Subscription;

  constructor(private router: Router, private gaEventsService: GoogleAnalyticsEventsService) {
    //
  }

  ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects)
        ga('send', 'pageview')
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
