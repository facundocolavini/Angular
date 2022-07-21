import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMiPropiaDirectiva]'
})
export class MiPropiaDirective implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  @Input('calificacion') calificacion: number;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
    console.log('onInit');
    if (this.calificacion >= 70) {
      this.renderer.setStyle(
        this.elemento.nativeElement,
        'color',
        'blue'
      );
      this.renderer.setStyle(
        this.elemento.nativeElement,
        'background-color',
        'unset'
      );
    }
    else {
      this.renderer.setStyle(
        this.elemento.nativeElement,
        'color',
        'white'
      );
      this.renderer.setStyle(
        this.elemento.nativeElement,
        'background-color',
        'red'
      );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);
  }

}
