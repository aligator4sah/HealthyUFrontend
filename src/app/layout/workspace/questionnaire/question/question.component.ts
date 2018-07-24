import {Component, Input, OnInit} from '@angular/core';
import {Question, Questionnaire} from '../../../../mock-data/Question';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Questionnaire;
  @Input() form: FormGroup;


  constructor() { }

  ngOnInit() {

  }

}
