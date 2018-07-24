import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import {ClarityModule} from '@clr/angular';
import {Router, RouterModule} from '@angular/router';
import {CompleteCardModule} from '../complete-card/complete-card.module';
import {QuestionModule} from './question/question.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    CompleteCardModule,
    QuestionModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: QuestionnaireComponent}
    ])
  ],
  declarations: [QuestionnaireComponent],
  exports: [
    ClarityModule,
    RouterModule,
    CompleteCardModule,
    QuestionModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionnaireComponent
  ]
})
export class QuestionnaireModule { }
