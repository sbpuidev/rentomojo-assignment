import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersblogService } from './usersblog.service';

@Injectable({
    providedIn: 'root'
})
export class PostsListResolverService implements Resolve<any> {
    constructor(private _usersService: UsersblogService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this._usersService.getPosts(route.params['id']);
    }
}