import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ForgetPsdModule} from './forget-psd/forget-psd.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
    ForgetPsdModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ])
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ForgetPsdModule,
    ClarityModule
  ]
})
export class LoginModule { }
