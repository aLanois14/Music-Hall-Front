import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '@app/components/register/register.component';
import { Login } from '@app/models/login.model';
import { User } from '@app/models/user.model';
import { AuthenticateService } from '@app/services/authenticate.service';
import { ModalController } from '@ionic/angular';

export function removeSpaces(control: FormControl) {
    if (control && control.value.length > 0 && control.value.match(/ /)) {
        control.setValue(control.value.trim())
    }
    
    return null
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
	
	public currentUser: User
    public form: FormGroup
    public isSubmitted: boolean = false
    public userLogin: Login = new Login()
    
    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _auth: AuthenticateService,
        private _modal: ModalController
    ) {}

    ngOnInit() {
        this.form = this._formBuilder.group({
            email: [
                '',
                Validators.compose([
                    removeSpaces,
                    Validators.email,
                    Validators.required,
                ]),
            ],
            password: ['', Validators.required],
        })
    }

    public NavTo(target: string): void {
		this._router.navigate(["home/" + target])
	}

    public Login() {
        this.isSubmitted = true

        if (!this.form.valid) {
            return false
        } 
        else {
            Object.keys(this.form.controls)
            .forEach(
                ctrl => {
                    this.userLogin[ctrl] = this.form.controls[ctrl].value
                }
            )

            this._auth.Login(this.userLogin)
                .then(
                    data => {
                        this.currentUser = data
                        
                    }
                )
                .catch(
                    err => {
                        console.log(err)
                    }
                )
        }
    }

    public async OpenRegister(){
        const pop = await this._modal.create({
            component: RegisterComponent,
            cssClass: 'create-new-modal'
        });
        return await pop.present();
    }
}
