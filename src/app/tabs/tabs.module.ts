import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Pages
import { TabsPage } from './tabs.page';

// Routing
import { TabsPageRoutingModule } from './tabs-routing.module';

@NgModule({
  imports: [
    CommonModule,

    // Ionic
    IonicModule,

    // Routing
    TabsPageRoutingModule
  ],
  declarations: [
    // Pages
    TabsPage
  ]
})
export class TabsPageModule {}
