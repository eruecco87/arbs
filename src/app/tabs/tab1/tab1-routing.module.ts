import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }, {
    path: 'roster/:id',
    loadChildren: () => import('@pages').then(m => m.RosterDetailsPageModule)
  }, {
    path: 'force',
    loadChildren: () => import('@pages').then(m => m.RosterForcePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
