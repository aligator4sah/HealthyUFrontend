/** question related model definition*/

export class Domain {
  did: number;
  domain: string;
  weight: number;

  constructor(options: {
    did?: number,
    domain?: string,
    weight?: number,
  } = {}) {
    this.did = options.did;
    this.domain = options.domain;
    this.weight = options.weight || 1;
  }
}

export class Questionnaire {
  id: number;
  key: string;
  label: string;
  hint: string;
  type: string;
  ansOptions: any;
  order: number;
  required: boolean;
  domain: string;
  weight: number;
  constructor(options: {
    id?: number;
    key?: string;
    label?: string;
    hint?: string;
    type?: string;
    ansOptions?: any;
    order?: number;
    required?: boolean;
    domain?: string;
    weight?: number;
  } = {}){
    this.id = options.id;
    this.key = options.key;
    this.label = options.label;
    this.hint = options.hint || '';
    this.type = options.type;
    this.ansOptions = options.ansOptions || {};
    this.order = options.order || options.id;
    this.required = options.required || false;
    this.domain = options.domain || '';
    this.weight = options.weight || 1;
  }
}

export class Question {
  qid: number;
  key: string;
  label: string;
  hint: string;
  type: string;
  ansOptions: {key: string, value: string}[] = [];
  order: number;
  value: string;
  required: boolean;
  constructor(options: {
    qid?: number,
    key?: string,
    label?: string,
    hint?: string,
    type?: string,
    ansOptions?: any,
    order?: number,
    value?: string,
    required?: boolean,
  } = {}) {
    this.qid = options.qid;
    this.key = options.key || '';
    this.label = options.label;
    this.hint = options.hint || '';
    this.type = options.type;
    this.ansOptions = options.ansOptions || [];
    this.order = options.order || -1;
    this.value = options.value || '';
    this.required = options.required || false;
  }
}

export class DomQuestion extends Question {
  domain: string;
  weight: number;
  constructor(options: {} = {}) {
    super(options);
    this.domain = options['domain'] || '';
    this.weight = options['weight'] || 0;
  }
}

export class AnswerItem {
  id: number;
  questionId: number;
  answer: any;
  domain: string;
  weight: number;
  sessionId: number;
  constructor(options: {
    id?: number;
    questionId?: number;
    answer?: any;
    domain?: string;
    weight?: number;
    sessionId?: number;
  } = {}) {
    this.id = options.id;
    this.questionId = options.questionId;
    this.answer = options.answer || {};
    this.domain = options.domain;
    this.weight = options.weight;
    this.sessionId = options.sessionId || -1;
  }
}

export class Session {
  id: number;
  userId: number;
  createDate: string;
  updateDate: string;
  questionnaireAnswer: any;
  constructor(options: {
    id?: number;
    userId?: number;
    createDate?: string;
    updateDate?: string;
    questionnaireAnswer?: any;
  } = {}) {
    this.id = options.id;
    this.userId = options.userId;
    this.createDate = options.createDate || '';
    this.updateDate = options.updateDate || '';
  }
}

export const TYPE = [
  // {key: 'demographic', value: 'Demographic'},
  {key: 'questionnaire', value: 'Questionnaire'},
];

export const DOMAIN = [
  {key: '1', value: 'Physical'},
  {key: '2', value: 'Behavioral'},
  {key: '3', value: 'Spiritual'},
];

export const ANSTYPE = [
  {key: 'textbox', value: 'Text Input Question'},
  {key: 'dropdown', value: 'Drop Down Question'},
  {key: 'radiobutton', value: 'Radio Button Question'}
];


export class Options {
  key: number;
  eid: string;
  extent: number;
  value: string;
}
