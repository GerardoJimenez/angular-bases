import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcumuladorComponent } from './contador/contador.component';



@NgModule({
  declarations: [
    AcumuladorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AcumuladorComponent
  ]
})
export class ContadorModule { }
