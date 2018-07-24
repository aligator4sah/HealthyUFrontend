import { Component, OnInit } from '@angular/core';
import {Gender, Marital, Race, SecurityQues, USER1, UserType} from '../../../mock-data/userInfo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = USER1;
  userId = JSON.parse(localStorage.getItem('curUser')).id;

  user1: any;
  profileForm: FormGroup;
  securityForm: FormGroup;
  changePassword: boolean = false;

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


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe(value => {
      this.user1 = value;
      this.profileForm = this.fb.group({
        username: [this.user1.userName],
        firstname: [this.user1.firstName],
        lastname: [this.user1.lastName],
        dob: [this.user1.birthDate],
        role: [this.user1.userType],
        gender: [this.user1.gender],
        phone: [this.user1.phone],
        marital: [this.user1.maritial],
        psd: [this.user1.password],
        repsd: [this.user1.password],
      });
      this.securityForm = this.fb.group({
        Q1: [this.user1.security.Q1],
        Q2: [this.user1.security.Q2],
        Q3: [this.user1.security.Q3],
        A1: [this.user1.security.A1],
        A2: [this.user1.security.A2],
        A3: [this.user1.security.A3],
      });
    })
  }

  goBack() {
    window.history.back();
  }

  submitProfile() {
    this.userService.updateUser(this.userId, this.profileForm.value).subscribe(value => {
      // console.log(value);
    });
  }

  submitSecurity() {
    this.userService.updateUser(this.userId, {security: this.securityForm.value}).subscribe(value => {
      console.log(value);
    });
    console.log(this.securityForm.value);
  }

}
