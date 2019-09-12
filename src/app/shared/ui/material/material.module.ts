import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
