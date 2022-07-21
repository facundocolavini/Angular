import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ejemplo-modal',
  templateUrl: './ejemplo-modal.component.html',
  styleUrls: ['./ejemplo-modal.component.css']
})
export class EjemploModalComponent implements OnInit {

  public valor: string;

  constructor(
    public dialogRef: MatDialogRef<EjemploModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
