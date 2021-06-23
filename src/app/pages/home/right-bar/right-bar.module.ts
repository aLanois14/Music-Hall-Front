import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RightBarPageRoutingModule } from './right-bar-routing.module';

import { RightBarPage } from './right-bar.page';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutocompleteLibModule,
    RightBarPageRoutingModule
  ],
  declarations: [
    RightBarPage
  ],
  exports: [
    RightBarPage
  ]
})
export class RightBarPageModule {}
