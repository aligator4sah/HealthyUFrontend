import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [FooterComponent],
  exports: [
    ClarityModule,
    FooterComponent
  ]
})
export class FooterModule { }
