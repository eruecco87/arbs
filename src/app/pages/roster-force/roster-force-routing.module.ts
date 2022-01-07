import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { RosterForcePage } from './roster-force.page';

const routes: Routes = [
  {
    path: '',
    component: RosterForcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosterForcePageRoutingModule {}
