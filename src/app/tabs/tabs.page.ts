import { Component } from '@angular/core';

// Ionic
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  /**
   * TabsPage Constructor
   */
  constructor(
    private navController: NavController
  ) {}

  /**
   * Forces tab to go to the root when navigating
   *
   * @param event
   */
  public setRootTab(event: any): void {

    this.navController.navigateRoot(event.tab);

  }
}
