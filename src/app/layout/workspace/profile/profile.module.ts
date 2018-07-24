import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {ClarityModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CompleteCardModule} from '../complete-card/complete-card.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    CompleteCardModule,
    RouterModule.forChild([
      {path: '', component: ProfileComponent}
    ])
  ],
  declarations: [ProfileComponent],
  exports: [
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CompleteCardModule,
    ProfileComponent
  ]
})
export class ProfileModule { }
