import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ionic
import { IonicModule } from '@ionic/angular';

// Pages
import { Tab1Page } from './tab1.page';

// Components
import { RosterImportComponent, RosterListComponent } from '@components';

// Routing
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // Ionic
    IonicModule,

    // Routing
    Tab1PageRoutingModule,
  ],
  declarations: [
    // Pages
    Tab1Page,

    // Components
    RosterImportComponent,
    RosterListComponent
  ]
})
export class Tab1PageModule {}
