import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Ionic
import { IonicModule } from '@ionic/angular';

// Components
import {
  ForceHeaderComponent,
  LoaderComponent,
  RosterHeaderComponent,
  RosterImportComponent,
  RosterListComponent
} from '@components';

@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    RouterModule,

    // Ionic
    IonicModule
  ],
  declarations: [
    ForceHeaderComponent,
    LoaderComponent,
    RosterHeaderComponent,
    RosterImportComponent,
    RosterListComponent
  ],
  exports: [
    ForceHeaderComponent,
    LoaderComponent,
    RosterHeaderComponent,
    RosterImportComponent,
    RosterListComponent
  ]
})
export class ComponentsModule {

  /**
   * ComponentsModule Constructor
   */
  constructor() {}
}
