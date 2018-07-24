import { Component, OnInit } from '@angular/core';
import {StateService} from '../../../service/state.service';
import {QuestionService} from '../../../service/question.service';
import {ClrDatagridComparatorInterface, ClrDatagridStringFilterInterface} from '@clr/angular';
import {Questionnaire} from '../../../mock-data/Question';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  sessionId: number;
  answers: any;
  labelFilter = new LabelFilter();
  questionComparator = new QuestionComparator();
  weightComparator = new WeightComparator();

  constructor(
    private stateService: StateService,
    private questionService: QuestionService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.sessionId = this.stateService.curSession$.getValue();
      this.questionService.getAnswersBySession(this.sessionId).subscribe(value => {
        this.answers = value;
        console.log(this.answers);
      })
    })
  }

}


class LabelFilter implements ClrDatagridStringFilterInterface<Questionnaire> {
  accepts(item: Questionnaire, search: string): boolean {
    return item.label.toLowerCase().indexOf(search) >= 0;
  };
}

class QuestionComparator implements ClrDatagridComparatorInterface<Questionnaire> {
  compare(a: Questionnaire, b: Questionnaire) {
    return a.order - b.order;
  }
}

class WeightComparator implements ClrDatagridComparatorInterface<Questionnaire> {
  compare(a: Questionnaire, b: Questionnaire) {
    return a.weight - b.weight;
  }
}
