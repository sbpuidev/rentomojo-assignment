import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersblogService } from "./services/usersblog.service";
import { HttpClientModule } from '@angular/common/http';
import { UserListResolverService } from "./services/users-resolve.service";
import { PostsListResolverService } from "./services/posts-resolve.service";
import { PostDetailsResolverService } from "./services/post-details-resolver.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersblogService, UserListResolverService, PostsListResolverService,PostDetailsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
