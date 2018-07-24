import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSummaryComponent } from './data-summary.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {AdminCardModule} from '../admin-card/admin-card.module';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AdminCardModule,
    ChartsModule,
    RouterModule.forChild([
      {path: '', component: DataSummaryComponent}
    ])
  ],
  declarations: [DataSummaryComponent],
  exports: [
    ClarityModule,
    RouterModule,
    ChartsModule,
    AdminCardModule,
    DataSummaryComponent
  ]
})
export class DataSummaryModule { }
