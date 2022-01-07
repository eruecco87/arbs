import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Pages
import { Tab3Page } from './tab3.page';

// Routing
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    CommonModule,

    // Ionic
    IonicModule,

    // Routing
    Tab3PageRoutingModule,
  ],
  declarations: [
    // Pages
    Tab3Page
  ]
})
export class Tab3PageModule {}
