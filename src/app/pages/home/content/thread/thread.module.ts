import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreadPageRoutingModule } from './thread-routing.module';

import { ThreadPage } from './thread.page';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ThreadPageRoutingModule,
		IvyCarouselModule
	],
	declarations: [
		ThreadPage
	]
})
export class ThreadPageModule {}
