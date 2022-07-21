import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './componentes/custom-input/custom-input.component';



@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomInputComponent
  ]
})
export class CompartidoModule { }
