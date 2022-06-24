import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ChildModule } from '../child-content/child-module.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ChildModule,
    FormsModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
