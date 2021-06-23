import { Injectable, EventEmitter } from '@angular/core';
import { ConfirmEmail, Login } from '@app/models/login.model';
import { User } from '@app/models/user.model';

import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class AuthenticateService {
    constructor(private _http: HttpService) {}

    /**Check email availability
     * Params:
     * email: string
     */
    CheckEmailAvailability(email:string): Promise<boolean>{
        return new Promise<boolean>((resolve, reject) => {
            this._http.Get('validate-email-availability', {email : email} )
                .subscribe(
                    (res) => {
                        resolve(true)
                    },
                    (Error) => {
                        reject(false)
                    }
                )
        })
    }

    /** Register
     * Params:
     * register: any
     */
    Register(register: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._http.PostFormData('register', register).subscribe(
                (res) => {
                    resolve(true);
                },
                (Error) => {
                    console.log(Error);
                    reject(false);
                }
            );
        });
    }

    /** Register
     * Params:
     * register: any
     */
    ConfirmEmail(confirmEmail: ConfirmEmail): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._http.PostFormData('confirm-email', confirmEmail).subscribe(
                (res) => {
                    var currentUser = new User(res);
                    localStorage.setItem('auth_token', currentUser.jwt.auth_token);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    resolve(true);
                },
                (Error) => {
                    console.log(Error);
                    reject(false);
                }
            );
        });
    }

    /** Base authentication
     * Params:
     * login: Login
     */
    Login(login: Login): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._http.Post('login', login).subscribe(
                (res) => {
                    var currentUser = new User(res);
                    localStorage.setItem('auth_token', currentUser.jwt.auth_token);
                    localStorage.setItem('refresh_token', currentUser.jwt.refresh_token)
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    resolve(true);
                },
                (Error) => {
                    console.log(Error);
                    reject(false);
                }
            );
        });
    }
}
