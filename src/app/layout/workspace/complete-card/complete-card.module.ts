import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteCardComponent } from './complete-card.component';
import {ClarityModule} from '@clr/angular';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FooterModule,
  ],
  declarations: [CompleteCardComponent],
  exports: [
    CompleteCardComponent,
    FooterModule,
  ]
})
export class CompleteCardModule { }
