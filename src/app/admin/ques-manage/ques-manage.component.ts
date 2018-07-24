import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../service/question.service';
import {Question, Questionnaire} from '../../mock-data/Question';
import {ClrDatagridComparatorInterface, ClrDatagridStringFilterInterface} from '@clr/angular';
import {Router} from '@angular/router';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-ques-manage',
  templateUrl: './ques-manage.component.html',
  styleUrls: ['./ques-manage.component.css']
})
export class QuesManageComponent implements OnInit {
  quesGroup;
  questions = [];
  labelFilter = new LabelFilter();
  questionComparator = new QuestionComparator();
  weightComparator = new WeightComparator();

  constructor(
    private questionService: QuestionService,
    private stateService: StateService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getQuestions();
    //this.quesGroup = this.questionService.getHealthQues();
  }

  getQuestions() {
    this.questionService.getAllQuestions().subscribe(value => {
      this.questions = value;
    })
  }

  onEdit(id: number) {
    this.stateService.selectedQuestion.next(id);
    this.route.navigateByUrl('/adminDashboard/edit-question')
  }

  onDelete(id: number)  {
    this.questions = this.questions.filter(value => value.id != id);
    this.questionService.deleteQuestion(id).subscribe();
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
