import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCardComponent } from './admin-card.component';
import {ClarityModule} from '@clr/angular';
import {FooterModule} from '../../layout/workspace/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FooterModule,
  ],
  declarations: [AdminCardComponent],
  exports: [
    ClarityModule,
    FooterModule,
    AdminCardComponent,
  ]
})
export class AdminCardModule { }
