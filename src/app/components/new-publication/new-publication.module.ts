import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NewPublicationComponent } from './new-publication.component';

@NgModule({
  declarations: [
    NewPublicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    NewPublicationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewPublicationModule { }