import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { WordPressFeed, WordPressTitle} from './wordpressfeed';
import { WordPressFeedService } from './app-blogs.service';
import { GoogleAnalyticsEventsService } from "./app-googleanalytics.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './app-blogs.component.html'
})

export class AppBlogsComponent implements OnInit{

  wordPressFeeds: WordPressFeed[];

  constructor(private service: WordPressFeedService, private gaEventsService: GoogleAnalyticsEventsService) { }

  ngOnInit() {
    this.service.getWordPressFeeds()
      .subscribe(
      feeds => {
        this.wordPressFeeds = feeds;
        this.gaEventsService.emitEvent("Blog", "Retrieve", "WordPressFeed Count:" +this.wordPressFeeds.length);
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
        this.gaEventsService.emitEvent("Blog", "Error", err);
      });
  }

  getErrorMsg() {
    return this.service.getErrorMsg();
  }

  getSuccessMsge() {
    return this.service.getSuccessMsge();
  }
}
