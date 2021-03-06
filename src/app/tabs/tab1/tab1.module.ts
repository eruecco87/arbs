import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ionic
import { IonicModule } from '@ionic/angular';

// Modules
import { ComponentsModule } from '@components';

// Pages
import { Tab1Page } from './tab1.page';

// Routing
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // Ionic
    IonicModule,

    // Componetns
    ComponentsModule,

    // Routing
    Tab1PageRoutingModule,
  ],
  declarations: [
    // Pages
    Tab1Page
  ]
})
export class Tab1PageModule {}
