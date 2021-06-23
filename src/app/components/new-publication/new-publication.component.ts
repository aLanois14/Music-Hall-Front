import { Component, OnInit } from '@angular/core';
import { PublicationService } from '@app/services/publication.service';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-new-publication',
    templateUrl: './new-publication.component.html',
    styleUrls: ['./new-publication.component.scss'],
})
export class NewPublicationComponent implements OnInit {

	public files: Array<File> = new Array<File>()
	public photos: Array<string> = new Array<string>()

    constructor(
        private _publication: PublicationService,
        private _modal: ModalController
    ) {}

    ngOnInit() {}

	public fileChangeEvent(event){
		console.log(event.target)
		console.log(event.target.files)
		if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event:any) => {
				console.log(event.target)
				console.log(event.target.result)
              	//this.picture = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);  // to trigger onload
          }
          
          let fileList: FileList = event.target.files;  
          //this.file = fileList[0];
	}
}
