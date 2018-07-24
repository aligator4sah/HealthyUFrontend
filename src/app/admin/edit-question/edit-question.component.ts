import {Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from '../../service/state.service';
import {QuestionService} from '../../service/question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit, OnDestroy {
  question: any;

  constructor(
    private stateService: StateService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getQuestionById(this.stateService.selectedQuestion.getValue());
  }

  ngOnDestroy() {
    this.stateService.selectedQuestion.next(-1);
  }

  getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(value => {
      this.question = value;
      console.log(this.question);
    })
  }

  edit() {

  }

  back() {
    window.history.back();
  }

}
