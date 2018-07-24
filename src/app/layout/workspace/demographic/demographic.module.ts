import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemographicComponent } from './demographic.component';
import {ClarityModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {QuestionModule} from '../questionnaire/question/question.module';
import {CompleteCardModule} from '../complete-card/complete-card.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionModule,
    CompleteCardModule,
    FooterModule,
    RouterModule.forChild([
      {path: '', component: DemographicComponent}
    ])
  ],
  declarations: [DemographicComponent],
  exports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    QuestionModule,
    CompleteCardModule,
    FooterModule,
    DemographicComponent
  ]
})
export class DemographicModule { }
