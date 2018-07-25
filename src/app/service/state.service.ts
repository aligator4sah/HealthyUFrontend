import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class StateService {

  curSession$:BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  selectedQuestion$:BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  token$:BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor() { }

}
