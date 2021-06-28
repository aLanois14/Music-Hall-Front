export class FileUpload {
	public name: string
	public type: string
	public file: File
	constructor(f?: FileUpload) {
		this.name = f ? f.name : null
		this.type = f ? f.type : null
		this.file = f ? f.file : null
	}
}