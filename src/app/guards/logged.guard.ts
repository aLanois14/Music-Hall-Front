import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  
  constructor(private _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let token: string = localStorage.getItem('auth_token')
		let currentUser: string = localStorage.getItem('currentUser')
		if (!token && !currentUser || ((token && token == "") || (currentUser && currentUser == ""))) {
            //localStorage.clear()
            return true
        }
        this._router.navigate(['/home/dashboard'])
        return false
    }
  
}
