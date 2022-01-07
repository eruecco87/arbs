import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Modules
import { ComponentsModule } from '@components';

// Pages
import { RosterForcePage } from './roster-force.page';

// Routing
import { RosterForcePageRoutingModule } from './roster-force-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,

    // Components
    ComponentsModule,

    // Routing
    RosterForcePageRoutingModule
  ],
  declarations: [
    // Pages
    RosterForcePage
  ]
})
export class RosterForcePageModule {}
