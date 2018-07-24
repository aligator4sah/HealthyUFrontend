import {SubnavComponent} from './subnav.component';
import {AnswerListModule} from '../workspace/answer-list/answer-list.module';

export const routes = [
  {
    path: '',
    component: SubnavComponent,
    children: [
      {path: '', redirectTo: 'dash', pathMatch: 'full'},
      {path: 'question', loadChildren: '../workspace/questionnaire/questionnaire.module#QuestionnaireModule'},
      {path: 'demographic', loadChildren: '../workspace/demographic/demographic.module#DemographicModule'},
      {path: 'dash', loadChildren: '../workspace/dashboard/dashboard.module#DashboardModule'},
      {path: 'session-list', loadChildren: '../workspace/session-list/session-list.module#SessionListModule'},
      {path: 'score-graph', loadChildren: '../workspace/score-graph/score-graph.module#ScoreGraphModule'},
      {path: 'profile', loadChildren: '../workspace/profile/profile.module#ProfileModule'},
      {path: 'answer-list', loadChildren: '../workspace/answer-list/answer-list.module#AnswerListModule'},
    ]
  }
];
