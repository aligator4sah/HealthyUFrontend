import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDomainComponent } from './input-domain.component';
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
      {path: '', component: InputDomainComponent}
      ]
    )
  ],
  declarations: [InputDomainComponent],
  exports: [
    ClarityModule,
    AdminCardModule,
    InputDomainComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class InputDomainModule { }
