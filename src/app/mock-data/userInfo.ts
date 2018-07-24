/** User info class defination */

export class UserModel {
  userName: string;
  firstName: string;
  lastName: string;
  userType: string;
  password: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
  race: string;
  maritial: string;
  security: any;

  constructor(options: {
    firstName?: string;
    lastName?: string;
    userType?: string;
    password?: string;
    birthDate?: string;
    userName?: string;
    gender?: string;
    phone?: string;
    email?: string;
    race?: string;
    maritial?: string;
    security?: any;
  } = {}) {
    this.firstName = options.firstName || '';
    this.lastName = options.lastName || '';
    this.userType = options.userType || '';
    this.userName = options.userName || '';
    this.password = options.password || '';
    this.gender = options.gender || '';
    this.phone = options.phone || '';
    this.email = options.email || '';
    this.birthDate = options.birthDate || '';
    this.race = options.race || '';
    this.maritial = options.maritial || '';
    this.security = options.security || {};
  }
}


export class securQue {
  question: string;
  answer: string;
  constructor(options: {
    question?: string,
    answer?: string
  } = {}) {
    this.question = options.question || '';
    this.answer = options.answer || '';
  }

}


/** user info related data*/
export const UserType = [
  {key: "student", value: "Student"},
  {key: "faculty", value: "Faculty"},
  {key: "staff", value: "Staff"},
];


export const Gender = [
  {key: 'male', value: "Male"},
  {ley: 'female', value: 'Female'},
];


/**TODO: change security question to at least 10 questions */

export const SecurityQues = [
  {key: 'Q1', value: "What is your favorite book?"},
  {key: 'Q2', value: "What is the name of the road you grew up on?"},
  {key: 'Q3', value: "What is your mother’s maiden name?"},
  {key: 'Q4', value: "What was the name of your first/current/favorite pet?"},
  {key: 'Q5', value: "What was the first company that you worked for?"},
  {key: 'Q6', value: "Where did you meet your spouse?"},
  {key: 'Q7', value: "Where did you go to high school/college?"},
  {key: 'Q8', value: "What is your favorite food?"},
  {key: 'Q9', value: "What city were you born in?"},
  {key: 'Q10', value: "Where is your favorite place to vacation?"}

];

export const Race = [
  {value:'Caucasian',viewValue:'Caucasian'},
  {value:'African American',viewValue:'African American'},
  {value:'Hispanic',viewValue:'Hispanic'},
  {value:'Bi-Racial',viewValue:'Bi-Racial'},
  {value:'Asian',viewValue:'Asian'},
  {value:'White',viewValue:'White'},
  {value:'Other',viewValue:'Other'}
];

export const Marital = [
  {value:'Single',viewValue:'Single'},
  {value:'Married',viewValue:'Married'},
  {value:'Separated',viewValue:'Separated'},
  {value:'Divorced',viewValue:'Divorced'}
];


export const DOMAINS = [
  {key: 'Physical', value: 'Physical'},
  {key: 'Emotional', value: 'Emotional'},
  {key: 'Social', value: 'Social'},
  {key: 'Financial', value: 'Financial'},
  {key: 'Spiritual', value: 'Spiritual'},
  {key: 'Occupational', value: 'Occupational'},
  {key: 'Intellectual', value: 'Intellectual'}
];


export const SESSIONDATA = [
  {id: 1, date: '10/02/2018'},
  {id: 2, date: '28/04/2018'}
];


export const USER1 = {
  username: 'user1@outlook.com',
  firstname: 'John',
  lastname: 'Smith',
  gender: 'Male',
  dob: '12/02/1993',
  type: 'Student',
  phone: '412-232-1233',
  race: 'African American',
  marital: 'Single',
  password: 'abcd1234',
  Q1: 'What is your favorite book?',
  Q2: 'What is the name of the road you grew up on?',
  Q3: 'Where did you meet your spouse?',
  A1: 'Killing a mocking bird',
  A2: 'Rain Road',
  A3: 'Heaven',
};
