import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Modules
import { ComponentsModule } from '@components';

// Pages
import { TabsPage } from './tabs.page';

// Routing
import { TabsPageRoutingModule } from './tabs-routing.module';

@NgModule({
  imports: [
    CommonModule,

    // Ionic
    IonicModule,

    // Modules
    ComponentsModule,

    // Routing
    TabsPageRoutingModule
  ],
  declarations: [
    // Pages
    TabsPage
  ]
})
export class TabsPageModule {}
