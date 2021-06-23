import { Component, OnInit } from '@angular/core';
import { NewPublicationComponent } from '@app/components/new-publication/new-publication.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.page.html',
  styleUrls: ['./thread.page.scss'],
})
export class ThreadPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

	ngOnInit() {
	}

	/* Create new item from header button */
	public async NewPublication() {
		const pop = await this._modal.create({
            component: NewPublicationComponent,
            cssClass: 'create-new-modal'
        });
        return await pop.present();
	}

}
