import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPsdComponent } from './forget-psd.component';
import {ClarityModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ForgetPsdComponent],
  exports: [
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    ForgetPsdComponent
  ]
})
export class ForgetPsdModule { }
