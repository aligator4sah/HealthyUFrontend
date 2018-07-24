import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubnavComponent } from './subnav.component';
import {ClarityModule} from '@clr/angular';
import {HeaderModule} from '../header/header.module';
import {RouterModule} from '@angular/router';
import {routes} from './subnav.route';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SubnavComponent],
  exports: [
    HeaderModule,
    ClarityModule,
    SubnavComponent,
    RouterModule,
  ]
})
export class SubnavModule { }
