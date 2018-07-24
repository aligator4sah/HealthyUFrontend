import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../mock-data/userInfo';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {API_URL} from './http.service';
import {Log} from '@angular/core/testing/src/logger';

// const api_url = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }


  /**POST a new user */
  addUser(user: UserModel): Observable<any> {
    return this.http.post<any>(API_URL + '/User', user, httpOptions)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }


  /**PATCH user profile information */
  updateUser(id: number, user: any): Observable<any> {
    return this.http.patch<any>(API_URL + '/User/' + id, user, httpOptions)
      .pipe(
        catchError(this.handleError('updateuser', user))
      );
  }


  // /**GET all user list */
  // getAllUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(API_URL + '/User')
  //     .pipe(
  //       catchError(this.handleError('getAllUsers', []))
  //     )
  // }


  /**GET user information by id */
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(API_URL + '/User/' + id)
      .pipe(
        catchError(this.handleError('getUserById', id))
      );
  }

  /** POST post username and password to backend*/
  loginCheck(LogInfo: any): Observable<any> {
    return this.http.post<any>(API_URL + '/User/login', LogInfo, httpOptions)
      .pipe(
        catchError(this.handleError('loginCheck', LogInfo))
      )
  }
}


