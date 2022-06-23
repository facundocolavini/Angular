import { Directive, ElementRef,Renderer2 } from '@angular/core';

@Directive({
selector: '[appMiDirectiva]'
})
export class MiDirectivaDirectiva {

constructor(
private element : ElementRef, // hace referencia a un elemento del HTML
private renderer: Renderer2//Modifica o gestiona elementos del HTML.) {
){
renderer.setStyle(element.nativeElement,'fontSize','30px');
renderer.setStyle(element.nativeElement,'color','blue');
renderer.setStyle(element.nativeElement,'border','2px solid blue');
}

}
