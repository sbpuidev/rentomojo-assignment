import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UsersblogService } from 'src/app/services/usersblog.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {
  postDetails;
  comments:Observable<any>;
  showLoadingIndicator = true;
  toggleSpinner:boolean = false;
  castCmnt = new Subject();
  constructor(private _route:ActivatedRoute,private _router:Router,private usersBlogService:UsersblogService) { 
    this.postDetails = this._route.snapshot.data['postDetails'];
    console.log('posts:', this.postDetails);
    this._router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
      }
    });
  }
  
  ngOnInit(): void {
  }
  showComments(id){
    this.toggleSpinner = !this.toggleSpinner;
    this.comments=this.usersBlogService.getCommentsById(id);
  }
  delPost(id,userId){
    this.usersBlogService.delPostById(id).subscribe(
      (data:any)=>{
        alert('Post deleted !');
          this._router.navigate(['users-blog/posts/'+userId]);
      }
    );
  }
}
