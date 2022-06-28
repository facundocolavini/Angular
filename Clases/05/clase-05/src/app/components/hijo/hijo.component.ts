import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export class Amigo {
  public nombre:string = 'Facundo';
  public edad: number = 27;

  constructor(){
    this.nombre = 'amigo';
    this.edad = 27;
  }
  sayHi(){
    alert(this.nombre + ' hi');
  }
}

export interface Fruta {
  nombre: string;
}
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
 /* Esta propiedad va a ser pasada por el componente padre */
 @Input() elementos: string[]= [];
 @Input() titulo: string = '';
 //Emite un evento
 @Output() clickDato = new EventEmitter<Amigo>();
 @Output() clickElemento = new EventEmitter<string>();
 @Output() clickElementoFruta = new EventEmitter<Fruta>();

  constructor() { }

  ngOnInit(): void {
  }

 /*  click(){
    //el emit genera el evento para que el padre lo pueda tomar (cachear)
    this.clickDato.emit(new Amigo())
  } */
  
/*   click(elem: string){
    this.clickElemento.emit(elem);

  } */

  click(elem: string){
    this.clickElementoFruta.emit({nombre:elem});

  }

  alertarAlgo(text: string){
    alert(text);
  }
}
