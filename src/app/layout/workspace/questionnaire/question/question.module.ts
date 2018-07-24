import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import {ClarityModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [QuestionComponent],
  exports: [
    QuestionComponent,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class QuestionModule { }
