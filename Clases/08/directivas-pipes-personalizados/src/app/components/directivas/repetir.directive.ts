import { Directive, TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  constructor(
    private templateRef: TemplateRef<any>, // Lo que tiene la etiqueta es el template ref
    private viewContainer: ViewContainerRef //Contenedor de la etiqueta donde pusimos la directiva y crea un nuevo template
    ) { }

  @Input() set appRepetir(numero: number) {
    for (var i = 0; i < numero; i++)
      this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
