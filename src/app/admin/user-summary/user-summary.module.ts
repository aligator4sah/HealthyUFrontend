import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSummaryComponent } from './user-summary.component';
import {ClarityModule} from '@clr/angular';
import {AdminCardModule} from '../admin-card/admin-card.module';
import {ChartsModule} from 'ng2-charts';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AdminCardModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: UserSummaryComponent}
    ])
  ],
  declarations: [UserSummaryComponent],
  exports: [
    CommonModule,
    ClarityModule,
    AdminCardModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    UserSummaryComponent,
    RouterModule
  ]
})
export class UserSummaryModule { }
