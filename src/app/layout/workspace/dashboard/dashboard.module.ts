import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {ChartsModule} from 'ng2-charts';
import {CompleteCardModule} from '../complete-card/complete-card.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ChartsModule,
    CompleteCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent],
  exports: [
    ClarityModule,
    DashboardComponent,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CompleteCardModule,
    RouterModule
  ]
})
export class DashboardModule { }
