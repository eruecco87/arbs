import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'roster-details',
    loadChildren: () => import('./pages/roster-details/roster-details.module').then( m => m.RosterDetailsPageModule)
  },
  {
    path: 'roster-force',
    loadChildren: () => import('./pages/roster-force/roster-force.module').then( m => m.RosterForcePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'disabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
