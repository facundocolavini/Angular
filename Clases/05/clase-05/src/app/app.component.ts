import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Amigo, Fruta, HijoComponent } from './components/hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title = 'clase-05';

  // Tipo HijoComponent
  @ViewChild(HijoComponent, { static: false }) componenteHijo: HijoComponent 

/*   funcionClick(amigo: Amigo){
    amigo.sayHi();
  } */

  ngAfterViewInit(): void {
     console.log(this.componenteHijo.alertarAlgo('texto alert')); 
  }

  funcionClick(fruta: Fruta){
   console.log(fruta);
  }
  cambiarTitulo(){
    this.componenteHijo.titulo ='Titulo Nuevo Cambiado';
  }
}
