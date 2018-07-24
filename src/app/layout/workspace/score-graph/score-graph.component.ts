import { Component, OnInit } from '@angular/core';
import {StateService} from '../../../service/state.service';
import {DOMAINS} from '../../../mock-data/userInfo';

@Component({
  selector: 'app-score-graph',
  templateUrl: './score-graph.component.html',
  styleUrls: ['./score-graph.component.css']
})
export class ScoreGraphComponent implements OnInit {

  sessionId: number;
  domains = DOMAINS;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Your Score'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Average Score'}
  ];

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.curSession$.subscribe(value => this.sessionId = value);
    });
    this.barChartLabels = this.domains.map(value => {return value.key});
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
