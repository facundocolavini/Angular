import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  public btnActions = new Array<string>('back','add','edit','delete');

  constructor() { }


  ngOnInit(): void {
    console.log(this.btnActions,'actions buttons')
  }

}
