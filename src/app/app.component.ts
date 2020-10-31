import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rentomojo';
  currentUrl:any;
  constructor(private router:Router){
    router.events.subscribe((event) => {
      console.log(event);
      if (event instanceof NavigationEnd || event instanceof NavigationStart ) {
        this.currentUrl = event.url;
      }
    });
  }
  ngOnInit(){

  }
}
