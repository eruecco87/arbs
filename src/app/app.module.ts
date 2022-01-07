import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

// Services
import { BattlescribeParserService, RosterService } from '@services';

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
    IonicStorageModule.forRoot({ name: 'arbs'}),

    // Routing
    AppRoutingModule
  ],
  providers: [
    // Ionic
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Services
    BattlescribeParserService,
    RosterService
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
   */
  constructor(
    private storage: Storage
  ) {

    this.initStorage();

  }

  /**
   * Initialize the storage
   */
  private async initStorage(): Promise<void> {

    await this.storage.create();

  }
}
