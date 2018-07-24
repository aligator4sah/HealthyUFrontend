import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    localStorage.clear();
  }

  login() {
    localStorage.setItem('curRole', 'admin');
    this.router.navigateByUrl('adminDashboard');
  }
}
