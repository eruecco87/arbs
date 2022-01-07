import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Ionic
import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

// Modules
import { ComponentsModule } from '@components';

// Services
import { BattlescribeParserService, RosterService, SelectionService } from '@services';

// Components
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,

    // Ionic
    IonicModule.forRoot({ mode: 'md' }),
    IonicStorageModule.forRoot({ name: 'arbs' }),

    // Modules
    ComponentsModule,

    // Routing
    AppRoutingModule
  ],
  providers: [
    // Ionic
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Services
    BattlescribeParserService,
    RosterService,
    SelectionService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {

  /**
   * AppModule Constructor
   *
   * @param storage
   * @param navController
   */
  constructor(
    private storage: Storage,
    private navController: NavController
  ) {

    this.initStorage();

    // Force navigation to the home page on app load.
    this.navController.navigateRoot('/');

  }

  /**
   * Initialize the storage
   */
  private async initStorage(): Promise<void> {

    await this.storage.create();

  }
}
