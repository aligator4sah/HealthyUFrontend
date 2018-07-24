import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../service/question.service';
import {Domain} from '../../mock-data/Question';

@Component({
  selector: 'app-input-domain',
  templateUrl: './input-domain.component.html',
  styleUrls: ['./input-domain.component.css']
})
export class InputDomainComponent implements OnInit {
  createDom: boolean = false;
  domains = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getDomains();
      this.form = this.fb.group({
        domain: ['', [Validators.required]],
        weight: [ 1 , [Validators.required]],
      });
  }

  getDomains() {
    this.questionService.getAllDomains().subscribe(value => {
      this.domains = value;
    })
  }

  /**TODO: add alert before making delete operation */
  deleteDomain(id: number) {
    this.domains = this.domains.filter(value => value.id != id);
    this.questionService.deleteDomain(id).subscribe();
  }

  addDomain() {
    this.createDom = !this.createDom;

  }

  submit() {
    //console.log(this.form.value);
    const newDomain = new Domain(this.form.value);
    this.questionService.addDomain(newDomain).subscribe(value => {
      this.domains.push(value);
      this.createDom = false;
    });
  }



}
