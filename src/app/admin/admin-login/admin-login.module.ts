import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {AdminDashboardModule} from '../admin-dashboard/admin-dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: AdminLoginComponent},
      {path: 'dashboard', loadChildren: '../admin-dashboard/admin-dashboard.module#AdminDashboardModule'},
      ]),
  ],
  declarations: [AdminLoginComponent],
  exports: [
    ClarityModule,
    AdminLoginComponent,
    RouterModule,
  ]
})
export class AdminLoginModule { }
