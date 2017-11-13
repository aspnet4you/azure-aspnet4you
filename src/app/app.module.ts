import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { SalesTaxComponent }   from './sales-tax.component';
import { HeroService }         from './hero.service';
import { BackendService }      from './backend.service';
import { Logger } from './logger.service';
import { AddressBookComponent } from './address-book.component';
import { AddressBookService } from './address-book.service';
import { AppApiComponent } from './app-api.component';
import { AppBlogsComponent } from './app-blogs.component';
import { AppHomeComponent } from './app-home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    SalesTaxComponent,
    AddressBookComponent,
    AppHomeComponent,
    AppApiComponent,
    AppBlogsComponent
  ],
  providers: [
    BackendService,
    HeroService,
    AddressBookService,
    Logger
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
