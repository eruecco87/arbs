import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { RosterDetailsPage } from './roster-details.page';

const routes: Routes = [
  {
    path: '',
    component: RosterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosterDetailsPageRoutingModule {}
