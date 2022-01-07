import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Modules
import { ComponentsModule } from '@components';

// Pages
import { RosterDetailsPage } from './roster-details.page';

// Routing
import { RosterDetailsPageRoutingModule } from './roster-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,

    // Components
    ComponentsModule,

    // Routing
    RosterDetailsPageRoutingModule
  ],
  declarations: [
    // Pages
    RosterDetailsPage
  ]
})
export class RosterDetailsPageModule {}
