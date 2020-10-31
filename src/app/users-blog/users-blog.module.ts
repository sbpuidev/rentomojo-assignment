import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { UsersBlogRoutingModule } from './users-blog-routing.module';
import { UsersBlogComponent } from './users-blog.component';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';

@NgModule({
  declarations: [UsersBlogComponent, PostsComponent, PostsDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersBlogRoutingModule
  ]
})
export class UsersBlogModule { }
