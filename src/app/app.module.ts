import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
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
    AddressBookComponent,
    AppHomeComponent,
    AppApiComponent,
    AppBlogsComponent
  ],
  providers: [
    AddressBookService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
