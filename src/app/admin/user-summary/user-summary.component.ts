import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  attributs = USERATTR;
  attrForm: FormGroup;
  selectedAttribute: string = "Role";

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Physical', 'Spiritual', 'Relational', 'Behavioral', 'Eco-economical', 'Psychological', 'Overall'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Student'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Faculty'},
    {data: [43, 32, 27, 34, 23, 43, 83], label: 'Staff'}
  ];

  public doughnutChartLabels:string[] = ['Student', 'Faculty', 'Staff'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.attrForm = this.fb.group({
      attribute: ['Role']
    });
    this.attrForm.controls['attribute'].valueChanges.subscribe(value => {
      console.log(value);
      this.selectedAttribute = value;
    })
  }

}

export const USERATTR = [
  {label: 'Role', value: 'Role'},
  {label: 'Gender', value: 'Gender'},
  {label: 'Age', value: 'Age'},
  {label: 'Race', value: 'Race'},
  {label: 'Marital Status', value: 'Marital Status'}
];
