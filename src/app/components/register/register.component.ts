import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@app/models/user.model';
import { AuthenticateService } from '@app/services/authenticate.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    public form: FormGroup;
	public isSubmitted: boolean = false
	public currentUser = new User()
	public emailAvailable: boolean = true
	public picture: string
    public file: File

    constructor(
        private _formBuilder: FormBuilder,
        private _auth: AuthenticateService,
		private _router: Router
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
			firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });
    }

	public fileChangeEvent(event){
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event:any) => {
              this.picture = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);  // to trigger onload
          }
          
          let fileList: FileList = event.target.files;  
          this.file = fileList[0];
    }

	public Register(){        
        this.isSubmitted = true
		console.log(this.form.valid)
		console.log(this.form)
        if (!this.form.valid) {
            return false
        } 
        else {
            Object.keys(this.form.controls)
                .forEach(
                    key => {
                        this.currentUser[key] = this.form.get(key).value
                    }
                )
				console.log("yop")
            this._auth.CheckEmailAvailability(this.currentUser.email)
                .then(
                    data => {
                        this.emailAvailable = true
                        var formData = new FormData()
						if(this.file){
							formData.append('File', this.file, this.file.name)
						}
						
						formData.append('Email', this.currentUser.email)
						formData.append('Password', this.currentUser.password)
						formData.append('FirstName', this.currentUser.firstName)
						formData.append('LastName', this.currentUser.lastName)

						this._auth.Register(formData)
							.then(
								data => {
									this._router.navigate(['']);
								}
							)
							.catch((err) => {
								this.emailAvailable = false
								return false
							});
                    }
                )
                .catch((err) => {
                    this.emailAvailable = false
                    return false
                });
        }
    }
}

export function removeSpaces(control: FormControl) {
	if (control && control.value.length > 0 && control.value.match(/ /)) {
		control.setValue(control.value.trim());
	}
	return null;
}
