import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'thread',
                loadChildren: () =>
                    import('./content/thread/thread.module').then(
                        (m) => m.ThreadPageModule
                    ),
            },
            {
                path: '',
                redirectTo: 'thread',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
