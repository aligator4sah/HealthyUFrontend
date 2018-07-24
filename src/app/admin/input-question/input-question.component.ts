import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ANSTYPE, DOMAIN, DomQuestion, Options, Question, Questionnaire, TYPE} from '../../mock-data/Question';
import {debounceTime} from "rxjs/operators";
import {QuestionService} from '../../service/question.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.css']
})
export class InputQuestionComponent implements OnInit {
  form: FormGroup;
  ansForm: FormGroup;

  inputActive: boolean = true;
  confirmActive: boolean = false;

  question: DomQuestion;

  type = TYPE;
  Domain = DOMAIN;
  domains = [];
  AnsType = ANSTYPE;

  options: Options[] = [];
  isQues: boolean = false;
  isText: boolean = false;
  needOptions: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.getDomains();
    this.form = this.fb.group({
      quesType: ['questionnaire', [Validators.required]],
      desp: ['', [Validators.required, Validators.minLength(4)]],
      domain: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      order: ['', [Validators.required]],
      anstype: ['', [Validators.required]],
      optnum: ['', [Validators.required]],
    });

    this.ansForm = this.fb.group({});

    if (this.form.controls['quesType'].value === 'questionnaire') {
      this.getType('questionnaire');
    } else {
      this.form.controls["quesType"].valueChanges.subscribe((value) => {
        this.getType(value);
      });
    }
    this.form.controls["anstype"].valueChanges.subscribe((value)=> {
      this.getAnsType(value);
    });
    this.form.controls["optnum"].valueChanges.subscribe((value)=> {
      this.getAnsNumber(value);
    })
  }

  getDomains() {
    this.questionService.getAllDomains().subscribe(value => {
      this.domains = value;
    })
  }


  getType(value: string) {
    if(value === "questionnaire") {
     this.isQues = true;
    }
  }

  getAnsType(value: string) {
    if (value === "textbox") {
      this.isText= true;
    } else {
      this.needOptions = true;
    }
  }

  getAnsNumber(optnum: number) {
    let id = 0;
    this.options = [];
    while (optnum > 0 && id < optnum) {
      let opt = {key: id, eid: 'A' + id, extent: id, value: ''};
      this.options.push(opt);
      id++;
    }

    let group: any = {};
    this.options.forEach(option => {
      group[option.eid] = ['', Validators.required]
      group[option.key] = [option.value, Validators.required]
    });
    this.ansForm = this.fb.group(group);

    for (let opt of this.options) {
      this.ansForm.controls[opt.eid].valueChanges.subscribe(value => opt.extent = value);
      this.ansForm.controls[opt.key].valueChanges.subscribe(value => opt.value = value);
    }
  }

  confirm() {
    this.inputActive = false;
    this.confirmActive = true;
  }

  back() {
    this.inputActive = true;
    this.confirmActive = false;
  }

  submit() {
    const newQuestion = new Questionnaire({
      key: 'Q' + this.form.controls['order'].value,
      label: this.form.controls['desp'].value,
      type: this.form.controls['anstype'].value,
      order: this.form.controls['order'].value,
      domain: this.form.controls['domain'].value,
      weight: this.form.controls['weight'].value,
      ansOptions: this.options,
    });
    this.questionService.addQuestion(newQuestion).subscribe(value => {
      this.router.navigateByUrl('/adminDashboard/ques-manage');
    });
  }

}

