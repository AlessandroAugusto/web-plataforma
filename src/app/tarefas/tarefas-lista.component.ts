import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'tarefas-lista.component',
  templateUrl: 'tarefas-lista.component.html',
    styleUrls: ['./tarefas-lista.component.css']
})

export class TarefasListaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TarefasListaComponent>,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
