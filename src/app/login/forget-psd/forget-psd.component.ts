import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SecurityQues} from '../../mock-data/userInfo';

@Component({
  selector: 'app-forget-psd',
  templateUrl: './forget-psd.component.html',
  styleUrls: ['./forget-psd.component.css']
})
export class ForgetPsdComponent implements OnInit {
  @Input() basic: boolean;

  form3: FormGroup;
  secureQue = SecurityQues;
  time = [
    {id: 1, qid: 'Q1', aid: 'A1', question: '', answer: ''},
    {id: 2, qid: 'Q2', aid: 'A2', question: '', answer: ''},
    {id: 3, qid: 'Q3', aid: 'A3', question: '', answer: ''},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form3 = this.fb.group({
      username: ['', [Validators.required]],
      Q1: ['', [Validators.required]],
      Q2: ['', [Validators.required]],
      Q3: ['', [Validators.required]],
      A1: ['', [Validators.required]],
      A2: ['', [Validators.required]],
      A3: ['', [Validators.required]],
    });
  }

}
