import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {AdminDashboardModule} from '../admin-dashboard/admin-dashboard.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: AdminLoginComponent},
      {path: 'dashboard', loadChildren: '../admin-dashboard/admin-dashboard.module#AdminDashboardModule'},
      ]),
  ],
  declarations: [AdminLoginComponent],
  exports: [
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    AdminLoginComponent,
    RouterModule,
  ]
})
export class AdminLoginModule { }
