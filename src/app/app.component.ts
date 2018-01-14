import { Component } from '@angular/core';

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
export class AppComponent { }
