import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Pages
import { RosterDetailsPage } from './roster-details.page';

// Routing
import { RosterDetailsPageRoutingModule } from './roster-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RosterDetailsPageRoutingModule
  ],
  declarations: [RosterDetailsPage]
})
export class RosterDetailsPageModule {}
