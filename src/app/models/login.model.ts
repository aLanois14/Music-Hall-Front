export class Login {
    public login: string
	public password: string

	constructor(user?: Login) {
		this.login = user ? user.login : ""
		this.password = user ? user.password : ""
	}
}

export class ConfirmEmail{
	public email: string
	public token: string

	constructor(confirmEmail?: ConfirmEmail){
		this.email = confirmEmail ? confirmEmail.email : ""
		this.token = confirmEmail ? confirmEmail.token : ""
	}
}
