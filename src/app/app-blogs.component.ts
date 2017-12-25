import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { WordPressFeed, WordPressTitle} from './wordpressfeed';
import { WordPressFeedService } from './app-blogs.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './app-blogs.component.html'
})

export class AppBlogsComponent implements OnInit{

  wordPressFeeds: WordPressFeed[];

  constructor(private service: WordPressFeedService) { }

  ngOnInit() {
    this.service.getWordPressFeeds()
      .subscribe(
      feeds => this.wordPressFeeds = feeds, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  getErrorMsg() {
    return this.service.getErrorMsg();
  }

  getSuccessMsge() {
    return this.service.getSuccessMsge();
  }
}
