import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    ClarityModule,
    RouterModule
  ]
})
export class HeaderModule { }
