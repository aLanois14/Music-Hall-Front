import { Event } from "./event.model"
import { Job } from "./job.model"

export class User {
    public id: number
    public firstName: string
	public lastName: string
    public picture: string
    public email: string
    public password: string
    public role: string
    public jwt: Jwt
    public events: Array<Event>
    public jobs: Array<Job>
    public participate: boolean
    public onLine: boolean
    public firstConnexion: boolean
    public connectedCalendar: boolean

	constructor(user?: User) {
        this.id = user ? user.id : null
		this.firstName = user ? user.firstName : ""
		this.lastName = user ? user.lastName : ""
        this.picture = user ? user.picture : ""
        this.email = user ? user.email : ""
		this.password = user ? user.password : ""
        this.role = user ? user.role : ""
        this.jwt = (user && user.jwt) ? new Jwt(user.jwt) : null
        this.events = user ? user.events : new Array<Event>()
        this.jobs = user ? user.jobs : new Array<Job>()
        this.participate = user ? user.participate : null
        this.onLine = user ? user.onLine : false
        this.firstConnexion = user ? user.firstConnexion : false
        this.connectedCalendar = user ? user.connectedCalendar : false
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