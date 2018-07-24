import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuesManageComponent } from './ques-manage.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {AdminCardModule} from '../admin-card/admin-card.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AdminCardModule,
    RouterModule.forChild([
      {path: '', component: QuesManageComponent}
    ])
  ],
  declarations: [QuesManageComponent],
  exports: [
    ClarityModule,
    AdminCardModule,
    QuesManageComponent,
    RouterModule
  ]
})
export class QuesManageModule { }
