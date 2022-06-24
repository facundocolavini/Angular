import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildContentComponent } from './child-content.component';



@NgModule({
  declarations: [ChildContentComponent],
  imports: [
    CommonModule
  ],
  exports: [ChildContentComponent]
})
export class ChildModule { }
