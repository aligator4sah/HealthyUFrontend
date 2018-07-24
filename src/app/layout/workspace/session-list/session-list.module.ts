import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {CompleteCardModule} from '../complete-card/complete-card.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    CompleteCardModule,
    RouterModule.forChild([
      {path: '', component: SessionListComponent}
    ])
  ],
  declarations: [SessionListComponent],
  exports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    CompleteCardModule,
    SessionListComponent,
  ]
})
export class SessionListModule { }
