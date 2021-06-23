export class Publication {
	public guid: string
	public title: string
	public description: string
	public audioFile: string
    public bandId: number
	public publicationPhotos: Array<PublicationPhoto>
	constructor(p?: Publication) {
		this.title = p ? p.title : null
		this.description = p ? p.description : null
		this.audioFile = p ? p.audioFile : null
		this.bandId = p ? p.bandId : null
		this.publicationPhotos = p ? p.publicationPhotos : new Array<PublicationPhoto>()
		this.guid = p ? p.guid : null
	}
}

export class PublicationPhoto {
	public guid: string
	public photo: string
	constructor(p?: PublicationPhoto) {
		this.photo = p ? p.photo : null
		this.guid = p ? p.guid : ""
	}
}