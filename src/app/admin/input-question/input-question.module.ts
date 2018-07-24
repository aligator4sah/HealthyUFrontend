import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputQuestionComponent } from './input-question.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {AdminCardModule} from '../admin-card/admin-card.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AdminCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: InputQuestionComponent}
    ])
  ],
  declarations: [InputQuestionComponent],
  exports: [
    ClarityModule,
    RouterModule,
    AdminCardModule,
    FormsModule,
    ReactiveFormsModule,
    InputQuestionComponent
  ]
})
export class InputQuestionModule { }
