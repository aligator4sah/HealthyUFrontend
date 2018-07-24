import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClarityModule} from '@clr/angular';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityIconsApi} from '@clr/icons/clr-icons-api';
import {QuestionService} from './service/question.service';
import {QuestionControlService} from './service/question-control.service';
import {StateService} from './service/state.service';
import {HttpService} from './service/http.service';
import {UserService} from './service/user.service';
import {MessageService} from './service/message.service';
import {HttpErrorHandler} from './service/http-error-handler.service';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    QuestionService,
    QuestionControlService,
    StateService,
    HttpService,
    UserService,
    MessageService,
    HttpErrorHandler,
    UserService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
