import { Component, OnInit, ViewChild } from '@angular/core';

// Ionic
import { IonInput } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

// Interfaces
import { RosterInterface } from '@interfaces';

// Services
import { BattlescribeParserService, RosterService } from '@services';

@Component({
  selector: 'app-roster-import',
  templateUrl: './roster-import.component.html',
  styleUrls: ['./roster-import.component.scss'],
})
export class RosterImportComponent implements OnInit {

  /**
   * The Ionic File Input
   */
  @ViewChild('fileInput') fileInput: IonInput;

  /**
   * Holds the selected BattleScribe roster file.
   */
  public rosterFile: File;

  /**
   * RosterUploadComponent Constructor
   *
   * @param toastController
   * @param battlescribeParserService
   * @param rosterService
   */
  constructor(
    private toastController: ToastController,
    private battlescribeParserService: BattlescribeParserService,
    public rosterService: RosterService,
  ) {}

  /**
   * OnInit Lifecycle Hook
   */
  ngOnInit() {}

  /**
   * Opens the file selector from the ionic input.
   */
  public openFileSelector(): void {

    this.fileInput.getInputElement().then((element: HTMLInputElement) => element.click());

  }

  /**
   * Handles the file selection event.
   */
  public onFileChange(): void {

    this.fileInput.getInputElement().then(async (element: HTMLInputElement) => {

      if (element.files && element.files.length > 0) {

        this.rosterFile = element.files[0];
        const EXTENSION = this.rosterFile.name.split('.').reverse()[0];

        if (EXTENSION !== 'ros') {

          const TOAST = await this.toastController.create({
            header: 'Error',
            color: 'danger',
            message: EXTENSION === 'rosz' ?
              'Invalid File Format - Please use an UNCOMPRESSED .ros File' :
              'Invalid File Format - Please select a .ros File',
            duration: 2000
          });

          TOAST.present();

          this.clearFileSelection();

        }

      } else {

        this.clearFileSelection();

      }

    });

  }

  /**
   * Handles importing the selected roster file.
   */
  public handleFileImport(): void {

    this.battlescribeParserService.parse(this.rosterFile).subscribe((roster: RosterInterface) => {

      // Save the roster to the local storage
      this.rosterService.save(roster).toPromise().then(async (savedRoster: RosterInterface) => {

        const TOAST = await this.toastController.create({
          header: 'Success',
          color: 'success',
          message: 'Roster file imported successfully',
          duration: 2000
        });

        TOAST.present();

        this.clearFileSelection();

      }).catch(() => this.handleImportError());

    }, () => this.handleImportError());

  }

  /**
   * Clears the selected roster file and the ionic input.
   */
  public clearFileSelection(): void {

    this.fileInput.getInputElement().then((element: HTMLInputElement) => {

      element.value = null;
      this.fileInput.value = null;
      this.rosterFile = null;

    });

  }

  /**
   * Handles the import error.
   *
   * @private
   */
  private async handleImportError(): Promise<void> {

    const TOAST = await this.toastController.create({
      header: 'Error',
      color: 'danger',
      message: 'There was an error importing the roster file',
      duration: 2000
    });

    TOAST.present();

    this.clearFileSelection();

  }
}
