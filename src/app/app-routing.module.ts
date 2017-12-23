import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppApiComponent } from './app-api.component';
import { AppBlogsComponent } from './app-blogs.component';
import { AppHomeComponent } from './app-home.component';
import { OauthLoginComponent } from './oauth-login.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent },
  { path: 'api', component: AppApiComponent},
  { path: 'blogs', component: AppBlogsComponent },
  { path: 'oauth', component: OauthLoginComponent },
  { path: '**', component: AppHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
