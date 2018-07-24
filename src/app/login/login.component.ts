import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ClrWizard} from '@clr/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Gender, Marital, Race, SecurityQues, UserModel, UserType} from '../mock-data/userInfo';
import {UserService} from '../service/user.service';
import {StateService} from '../service/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid: boolean = false;
  lgOpen: boolean = false;
  role: string;
  forget: boolean = false;
  invalidLogin: boolean = false;

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  loginForm: FormGroup;

  user = new UserModel();
  registered: boolean = false;
  userType = UserType;
  gender = Gender;
  races = Race;
  maritals = Marital;

  secureQue = SecurityQues;
  time = [
    {id: 1, qid: 'Q1', aid: 'A1', question: '', answer: ''},
    {id: 2, qid: 'Q2', aid: 'A2', question: '', answer: ''},
    {id: 3, qid: 'Q3', aid: 'A3', question: '', answer: ''},
  ];

  @ViewChild("wizardlg") wizardLarge: ClrWizard;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private stateService: StateService,
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginRole: ['', [Validators.required]],
      loginName: ['', Validators.required],
      loginPsd: ['', Validators.required]
    });
    this.form1 = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      firstname: ['', []],
      lastname: ['', []],
      psd: ['', [Validators.required, Validators.minLength(6)]],
      repsd: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });
    this.form2 = this.fb.group({
      phone: ['', []],
      race: ['', Validators.required],
      marital: ['', Validators.required],
    });
    this.form3 = this.fb.group({
      Q1: ['', [Validators.required]],
      Q2: ['', [Validators.required]],
      Q3: ['', [Validators.required]],
      A1: ['', [Validators.required]],
      A2: ['', [Validators.required]],
      A3: ['', [Validators.required]],
    });
    localStorage.clear();
  }

  submit() {
    const loginInfo = {
      username: this.loginForm.controls['loginName'].value,
      password: this.loginForm.controls['loginPsd'].value,
      role: this.loginForm.controls['loginRole'].value,
    };
    this.userService.loginCheck(loginInfo).subscribe(value => {
      if (value.status != false) {
        this.stateService.token$.next(value.accessToken);
        console.log(value);
        const curUser = {
          id: value.id,
          username: this.loginForm.controls['loginName'].value,
          role: this.loginForm.controls['loginRole'].value
        };
        localStorage.setItem("curUser", JSON.stringify(curUser));
        this.router.navigateByUrl("/dashboard");
      } else {
        this.invalidLogin = true;
      }
    });

    // const curUser = {
    //   id: 1,
    //   username: this.loginForm.controls['loginName'].value,
    //   role: this.loginForm.controls['loginRole'].value
    // };
    // localStorage.setItem("curUser", JSON.stringify(curUser));
    // this.router.navigateByUrl("/dashboard");
  }

  signUp() {
    this.lgOpen = true;
  }

  openForget() {
    this.forget = true;
  }

  register() {
    const newUser = new UserModel({
      userName: this.form1.controls['username'].value,
      email: this.form1.controls['username'].value,
      firstName: this.form1.controls['firstname'].value,
      lastName: this.form1.controls['lastname'].value,
      password: this.form1.controls['psd'].value,
      userType: this.form1.controls['role'].value,
      gender: this.form1.controls['gender'].value,
      birthDate: this.form1.controls['dob'].value,
      phone: this.form2.controls['phone'].value,
      race: this.form2.controls['race'].value,
      maritial: this.form2.controls['marital'].value,
      security: this.form3.value,
    });
    this.userService.addUser(newUser).subscribe(value => {
      console.log(value);
      if (this.role !== undefined) {
        localStorage.setItem("curRole", this.role);
      }
      // this.router.navigateByUrl("/dashboard");
    });
    this.registered = true;
  }

}
