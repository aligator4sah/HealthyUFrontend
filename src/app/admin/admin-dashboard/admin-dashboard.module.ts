import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {ClarityModule} from '@clr/angular';
import {HeaderModule} from '../../layout/header/header.module';
import {RouterModule} from '@angular/router';

export const routes = [
  { path: '',
    component: AdminDashboardComponent,
    children: [
      {path: '', redirectTo: 'data-summary', patchMatch: 'full'},
      {path: 'input-question', loadChildren: '../input-question/input-question.module#InputQuestionModule'},
      {path: 'data-summary', loadChildren: '../data-summary/data-summary.module#DataSummaryModule'},
      {path: 'input-domain', loadChildren: '../input-domain/input-domain.module#InputDomainModule'},
      {path: 'ques-manage', loadChildren: '../ques-manage/ques-manage.module#QuesManageModule'},
      {path: 'user-summary', loadChildren: '../user-summary/user-summary.module#UserSummaryModule'},
      {path: 'edit-question', loadChildren: '../edit-question/edit-question.module#EditQuestionModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminDashboardComponent],
  exports: [
    HeaderModule,
    AdminDashboardComponent,
    ClarityModule,
    RouterModule,
  ]

})
export class AdminDashboardModule { }


