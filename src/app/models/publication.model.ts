import { SafeResourceUrl } from "@angular/platform-browser"

export class Publication {
	public id: number
	public guid: string
	public title: string
	public description: string
	public audioFile: string
    public bandId: number
	public publicationFiles: Array<PublicationFile>
	constructor(p?: Publication) {
		this.id = p ? p.id : null
		this.title = p ? p.title : null
		this.description = p ? p.description : null
		this.audioFile = p ? p.audioFile : null
		this.bandId = p ? p.bandId : null
		this.publicationFiles = p ? p.publicationFiles : new Array<PublicationFile>()
		this.guid = p ? p.guid : null
	}
}

export class PublicationFile {
	public guid: string
	public fileString: string
	public fileSrc?: SafeResourceUrl
	public type: string
	public name: string
	constructor(p?: PublicationFile) {
		this.fileString = p ? p.fileString : null
		this.guid = p ? p.guid : ""
		this.name = p ? p.name : ""
		this.type = p ? p.type : ""
	}
}