import { Injectable } from '@angular/core';

import { SearchUser, User } from '@app/models/user.model';

import { HttpService } from './http.service';


@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private _http: HttpService
    ) {}
    
    /** Get user schedule
    */
     GetUserVideo(): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this._http.Get('get-user-video').subscribe(
                (res) => {
                    var user = new User(res)

                    resolve(user)
                },
                (Error) => {
                    console.log(Error);
                    reject(null);
                }
            );
        });
    }
}
