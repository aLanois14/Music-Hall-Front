import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
	
	public user: User = new User()
    constructor() {}

    ngOnInit() {}
}
