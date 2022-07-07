import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas-pipes-personalizados';
  public texto = 'hola mundo'
  public calificacion = 30;
  public visible = false;
  click(){
    alert(this.texto)
  }
  subirCalificacion() {
    this.calificacion = this.calificacion + 10; 
    return this.calificacion
  }

}
