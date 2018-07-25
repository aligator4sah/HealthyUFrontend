import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form: FormGroup;
  invalidLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private stateService: StateService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.token$.next("");
    });
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    localStorage.clear();
  }

  login() {
    const logInfo = {
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
      role: 'Admin'
    };
    this.userService.loginCheck(logInfo).subscribe(value => {
      if (value && value.status != false) {
        this.stateService.token$.next(value.accessToken);
        const curUser = {
          id: value.id,
          username: this.form.controls['username'].value,
          role: "admin",
          token: value.accessToken
        };
        localStorage.setItem('curUser', JSON.stringify(curUser));
        this.router.navigateByUrl('adminDashboard');
      } else {
        this.invalidLogin = true;
      }
    });

  }
}
