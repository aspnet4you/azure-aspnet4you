import { Injectable } from '@angular/core';
import { WordPressFeed } from './wordpressfeed';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

var wordPressFeeds: WordPressFeed[];

@Injectable()
export class WordPressFeedService {

  errorMsg: string;
  successMsg: string;
  static goodMsg: string = "Successfully retrieved wordpress feeds.";
  static badMsg: string = "Server error: Something went wrong, can not get the data. May be you have not logged in! Look at the console for details."; 

  constructor(private http: HttpClient) {
  }

  private wordPressFeedUrl = environment.wordPressBaseUrl + '/wp-json/wp/v2/posts?fields=id,title,link';

  getWordPressFeeds(): Observable<WordPressFeed[]>{
     return this.http.get(this.wordPressFeedUrl)
      .map((data: any) => {
        this.successMsg = WordPressFeedService.goodMsg;
        console.log(WordPressFeedService.goodMsg);
        return data;
      })
      //...errors if any
      .catch((error: any) => {
        this.errorMsg = WordPressFeedService.badMsg;
        console.log(error || WordPressFeedService.badMsg);
        return Observable.throw(WordPressFeedService.badMsg)
      });
  }

  getErrorMsg() {
    return this.errorMsg;
  }

  getSuccessMsge() {
    return this.successMsg;
  }
}
