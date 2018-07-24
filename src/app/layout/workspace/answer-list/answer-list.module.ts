import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerListComponent } from './answer-list.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {CompleteCardModule} from '../complete-card/complete-card.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    CompleteCardModule,
    RouterModule.forChild([
      {path: '', component: AnswerListComponent}
    ])
  ],
  declarations: [AnswerListComponent],
  exports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    CompleteCardModule,
    AnswerListComponent,
  ]
})
export class AnswerListModule { }
