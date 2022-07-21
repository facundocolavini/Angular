import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Fruta, HijoComponent } from './clase-5/hijo/hijo.component';
import { ConversorPipe } from './clase8/pipes/conversor.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(HijoComponent, {static: false}) componenteHijo: HijoComponent;
  public texto = 'hola mundo'
  public calificacion = 30;
  public visible = false;

  constructor(
    private router: Router
  ) {
  }

  title = 'curso-angular';

  ngAfterViewInit(): void {
    //console.log(this.componenteHijo);
  }

  funcionClick(fruta: Fruta) {
    alert(fruta);
  }

  cambiarTitulo() {
    this.componenteHijo.titulo = 'Titulo cambiado';
  }

  click() {
    alert(new ConversorPipe().transform(this.texto, '?', 'upper'));
  }

  subirCalificacion() {
    this.calificacion = this.calificacion + 10;
  }

  irAMiVista() {
    this.router.navigate(['mi-vista']);
  }

}
