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
    let role = localStorage.getItem('curRole');
    if (role == 'admin') {
      this.isAdmin = true;
    }
  }

}
