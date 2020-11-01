import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rentomojo';
  currentUrl:any;
  showLoadingIndicator = true;

  constructor(private router:Router){
    router.events.subscribe((routerEvent) => {
      console.log(routerEvent);
      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationStart ) {
        this.currentUrl = routerEvent.url;
      }
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
  ngOnInit(){

  }
}
