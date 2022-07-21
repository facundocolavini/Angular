import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Fruta, HijoComponent } from './clase-5/hijo/hijo.component';
import { Alumno } from './clase12/modelos/alumnos';
import { ConversorPipe } from './clase8/pipes/conversor.pipe';
import { DatosAlumnosService } from './servicios/datos-alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild(HijoComponent, {static: false}) componenteHijo: HijoComponent;
  public texto = 'hola mundo'
  public calificacion = 30;
  public visible = false;
  public alumnos: Alumno[];

  constructor(
    private router: Router,
    public datosAlumnosService: DatosAlumnosService
  ) {
  }

  ngOnInit(): void {
    this.datosAlumnosService.obtenerInformacionAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos.filter(alumno => alumno.calificacion > 7);
    });
    this.datosAlumnosService.obtenerInformacionAlumnos().subscribe({
      next: alumnos => {
        this.alumnos = alumnos.filter(alumno => alumno.calificacion > 7);
      },
      error: error => console.error(error),
      complete: () => console.log('Complete')
    });
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
