import { Component, OnInit } from '@angular/core';
import { FileUpload } from '@app/models/file-upload.model';
import { Publication } from '@app/models/publication.model';
import { PublicationService } from '@app/services/publication.service';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-new-publication',
    templateUrl: './new-publication.component.html',
    styleUrls: ['./new-publication.component.scss'],
})
export class NewPublicationComponent implements OnInit {

	public files: Array<FileUpload> = new Array<FileUpload>()
	public photos: Array<string> = new Array<string>()
    public publication: Publication = new Publication()

    constructor(
        private _publication: PublicationService,
        private _modal: ModalController
    ) {}

    ngOnInit() {}

	public fileChangeEvent(event){
		if (event.target.files && event.target.files[0]) {
            console.log(event.target.files)
            for(let i = 0; i < event.target.files.length; i++){
                let reader = new FileReader();
                let file = new FileUpload()
                file.name = event.target.files[i].name
                file.type = event.target.files[i].type
                file.file = event.target.files[i]
                this.files.push(file)
                if(file.type.includes("image")){
                    reader.onload = (event:any) => {
                        this.photos.push(event.target.result)         
                    }
                    reader.readAsDataURL(event.target.files[i]);
                }
                
            }
          }
          
          let fileList: FileList = event.target.files;
          console.log(this.files)
	}

    public UpdateDescription(e){
        this.publication.description = e.target.value
    }

    public Publish(){
        const formData = new FormData()
        this.files.forEach(file => {
            console.log(file)
            formData.append("Files", file.file, file.name)
        })

        formData.append("Description", this.publication.description)

        this._publication.NewPublication(formData).then(data => console.log(data))
    }
}
