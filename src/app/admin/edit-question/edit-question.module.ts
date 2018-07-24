import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuestionComponent } from './edit-question.component';
import {ClarityModule} from '@clr/angular';
import {AdminCardModule} from '../admin-card/admin-card.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AdminCardModule,
    RouterModule.forChild([
      {path: '', component: EditQuestionComponent}
    ])
  ],
  declarations: [EditQuestionComponent],
  exports: [
    CommonModule,
    EditQuestionComponent,
    ClarityModule,
    AdminCardModule,
    RouterModule,
  ]
})
export class EditQuestionModule { }
