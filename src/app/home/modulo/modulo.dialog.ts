import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'modulo-dialog',
    templateUrl: 'modulo.dialog.html',
  })
  export class ModuloDialog {
  
    constructor(
      public dialogRef: MatDialogRef<ModuloDialog>) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }