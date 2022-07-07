import { Directive, ElementRef,Input,Renderer2,OnChanges, SimpleChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appMiPropiaDirectiva]'
})
export class MiPropiaDirective implements OnChanges, OnInit, AfterViewInit,OnDestroy {

  @Input('calificacion') calificacion : number;

  constructor(
    private elemento: ElementRef, //El elemento que vamos a modificar
    private renderer : Renderer2, // Estilizamos o pintamos ese elemento
  )

   {

      /* renderer.setStyle(elemento.nativeElement, 'color','white');
      renderer.setStyle(elemento.nativeElement, 'background-color','black'); */
  }
  //Ondestroy cuando el componente se elimina del DOM
  ngOnDestroy(): void {
      console.log('ngOnDestroy');
  }

  // Solo una vez cuando se acabe de acargar el compoente
  ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
  }
  //Solo una vez
  ngOnInit(): void {
      console.log('ngOnInit')
  }
  //Cuando cambia la propiedades 
  ngOnChanges(changes: SimpleChanges): void {

    //Con onchanges sabemos que propiedad fue la que cambio a diferencia del oninit
    if (this.calificacion >= 70){
        this.renderer.setStyle(this.elemento.nativeElement, 'background-color','green')
    }
    else{
      this.renderer.setStyle(this.elemento.nativeElement, 'color','white');
      this.renderer.setStyle(this.elemento.nativeElement, 'background-color','red');
    }
   
  }
}
