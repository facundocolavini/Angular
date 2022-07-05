/* import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal/modal-component.html',
  styleUrls: ['./modal/modal-component.css']
})

export class ModalComponent implements OnInit {

  public valor: string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
} */