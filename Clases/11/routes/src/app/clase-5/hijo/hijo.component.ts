import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Fruta {
  nombre: string;
}

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() elementos: string[] = [];
  @Input() titulo: string = '';
  @Output() clickElemento = new EventEmitter<Fruta>();

  constructor() { }

  ngOnInit(): void {
  }

  click(elem: string) {
    this.clickElemento.emit({nombre: elem});
  }

  alertarAlgo(texto: string) {
    alert(texto);
  }

}
