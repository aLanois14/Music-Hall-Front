import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightBarPage } from './right-bar.page';

const routes: Routes = [
  {
    path: '',
    component: RightBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RightBarPageRoutingModule {}
