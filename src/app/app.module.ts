import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app.errorhandler';
import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GethubProfileComponent } from './gethub-profile/gethub-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GethubFollowersComponent } from './gethub-followers/gethub-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavbarComponent,
    HomeComponent,
    GethubProfileComponent,
    NotFoundComponent,
    GethubFollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path:'', 
        component:HomeComponent
      },
      { 
        path:'followers', 
        component:GethubFollowersComponent
      },
      { 
        path:'followers/:id/:name', 
        component:GethubProfileComponent
      },
      { 
        path:'server', 
        component:ServerComponent
      },
      { 
        path:'**', 
        component:NotFoundComponent
      },
    ])
  ],
  providers: [
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
