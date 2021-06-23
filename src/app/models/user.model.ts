export class User {
    public id: number
    public firstName: string
	public lastName: string
    public picture: string
    public email: string
    public password: string
    public jwt: Jwt

	constructor(user?: User) {
        this.id = user ? user.id : null
		this.firstName = user ? user.firstName : ""
		this.lastName = user ? user.lastName : ""
        this.picture = user ? user.picture : ""
        this.email = user ? user.email : ""
		this.password = user ? user.password : ""
        this.jwt = (user && user.jwt) ? new Jwt(user.jwt) : null
	}
}

export class Jwt{
    public auth_token: string
    public refresh_token: string
    public expires_in: number
    public id: string

    constructor(jwt?: Jwt) {
		this.auth_token = jwt ? jwt.auth_token : ""
        this.refresh_token = jwt ? jwt.refresh_token : ""
		this.expires_in = jwt ? jwt.expires_in : null
        this.id = jwt ? jwt.id : ""
	}
}

export class SearchUser{
    public contributionId?: number
    public eventId?: number
    public searchText: string
    public selectedUsers: Array<User>

    constructor(s?: SearchUser){
        this.contributionId = s ? s.contributionId : 0
        this.eventId = s ? s.eventId : 0
        this.searchText = s ? s.searchText : ""
        this.selectedUsers = s ? s.selectedUsers : new Array<User>()
    }
}