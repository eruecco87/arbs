import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Pages
import { Tab2Page } from './tab2.page';

// Routing
import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    CommonModule,

    // Ionic
    IonicModule,

    // Routing
    Tab2PageRoutingModule,
  ],
  declarations: [
    // Pages
    Tab2Page
  ]
})
export class Tab2PageModule {}
