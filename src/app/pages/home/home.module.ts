import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { RightBarPageModule } from './right-bar/right-bar.module';
import { MenuPage } from './menu/menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RightBarPageModule
  ],
  declarations: [
    HomePage,
    MenuPage
  ]
})
export class HomePageModule {}
