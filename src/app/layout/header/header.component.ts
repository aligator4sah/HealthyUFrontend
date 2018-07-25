import { Component, OnInit } from '@angular/core';
import { ClarityIcons } from '@clr/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false;


  constructor() { }

  ngOnInit() {
    let role = JSON.parse(localStorage.getItem('curUser')).role;
    if (role == 'admin') {
      this.isAdmin = true;
    }
  }

}
