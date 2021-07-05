import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NewPublicationComponent } from '@app/components/new-publication/new-publication.component';
import { Publication } from '@app/models/publication.model';
import { PublicationService } from '@app/services/publication.service';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-thread',
    templateUrl: './thread.page.html',
    styleUrls: ['./thread.page.scss'],
})
export class ThreadPage implements OnInit {
    public publications = new Array<Publication>();
    public publicationsEvent: any = null;

    constructor(
        private _modal: ModalController,
        private _publication: PublicationService,
        private _sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        if (!this.publicationsEvent) {
            this.publicationsEvent =
                this._publication.publicationsEvent.subscribe((data) => {
					this.publications = data;
					this.publications.forEach((publication) => {
						publication.publicationFiles.forEach((publicationFile) => {
							if (publicationFile.type == 'audio') {
								publicationFile.fileSrc =
									this._sanitizer.bypassSecurityTrustResourceUrl(
										publicationFile.fileString
									);
							}
						});
					});
                });
        }

        this.publications = this._publication.GetPublications();
        if (this.publications) {
            this._publication.GetPublicationsList().then((data) => {
                
            });
        }
    }

    /* Create new item from header button */
    public async NewPublication() {
        const pop = await this._modal.create({
            component: NewPublicationComponent,
            cssClass: 'create-new-modal',
        });
        return await pop.present();
    }
}
