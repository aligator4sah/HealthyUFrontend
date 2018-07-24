import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../service/question.service';
import {FormGroup} from '@angular/forms';
import {Question} from '../../../mock-data/Question';
import {QuestionControlService} from '../../../service/question-control.service';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent implements OnInit {

  questions: Question[] = [];
  form: FormGroup;

  payLoad = '';

  constructor(
    private qs: QuestionService,
    private qcs: QuestionControlService
  ) { }

  ngOnInit() {
    this.questions = this.qs.getDemoQuestion();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
