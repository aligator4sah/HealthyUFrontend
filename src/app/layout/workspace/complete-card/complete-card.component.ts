import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../service/question.service';

@Component({
  selector: 'app-complete-card',
  templateUrl: './complete-card.component.html',
  styleUrls: ['./complete-card.component.css']
})
export class CompleteCardComponent implements OnInit {

  curUser = JSON.parse(localStorage.getItem('curUser'));
  sessions: any;
  sessionNum: number;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getSessions();
  }

  getSessions() {
    this.questionService.getSessionByUser(this.curUser.id).subscribe(value => {
      this.sessions = value;
      this.sessionNum = value.length;
    })
  }

}
