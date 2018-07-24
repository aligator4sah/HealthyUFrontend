import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreGraphComponent } from './score-graph.component';
import {ClarityModule} from '@clr/angular';
import {ChartsModule} from 'ng2-charts';
import {CompleteCardModule} from '../complete-card/complete-card.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ChartsModule,
    CompleteCardModule,
    RouterModule.forChild([
      {path: '', component: ScoreGraphComponent}
    ])
  ],
  declarations: [ScoreGraphComponent],
  exports: [
    CommonModule,
    ClarityModule,
    ChartsModule,
    CompleteCardModule,
    RouterModule,
    ScoreGraphComponent
  ]
})
export class ScoreGraphModule { }
