import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent implements OnInit {
  admin = JSON.parse(localStorage.getItem('curUser'));

  constructor() { }

  ngOnInit() {
  }

}
