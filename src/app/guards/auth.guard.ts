import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Jwt } from '@app/models/user.model';
import { HttpService } from '@app/services/http.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _jwt: JwtHelperService,
        private _http: HttpService
    ){}
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let token: string = localStorage.getItem('auth_token')
        if(token && !this._jwt.isTokenExpired(token)){
            return true
        }

        const refreshToken: string = localStorage.getItem("refresh_token")
        if (!token || !refreshToken) {  
            return false;
        }
    
        let jwt = new Jwt()
        jwt.auth_token = token
        jwt.refresh_token = refreshToken

        this._http.Post("refresh-token", jwt)
            .subscribe(
                res => {
                    let jwt = new Jwt(res)
                    localStorage.setItem("auth_token", jwt.auth_token)
                    localStorage.setItem("refreshToken", jwt.refresh_token)
                    return true
                },
                Error => {
                    localStorage.clear()
                    this._router.navigate([''])
                    return false
                }
            )     
    }
}
