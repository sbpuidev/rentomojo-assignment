import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersBlogComponent } from './users-blog.component';
import { UserListResolverService } from '../services/users-resolve.service';
import { PostsComponent } from './posts/posts.component';
import {PostsListResolverService} from '../services/posts-resolve.service';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostDetailsResolverService } from '../services/post-details-resolver.service';
const routes: Routes = [
  { path: '', component: UsersBlogComponent, resolve: { usersList: UserListResolverService } },
  { path: 'posts/:id', component: PostsComponent, resolve: { postsList: PostsListResolverService } },
  { path: 'posts-details/:id', component: PostsDetailsComponent, resolve: { postDetails: PostDetailsResolverService } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersBlogRoutingModule { }
