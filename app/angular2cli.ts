import {Component} from 'angular2/core';


@Component({
  selector: 'angular2cli-app',
  providers: [],
  templateUrl: 'app/angular2cli.html',
  directives: [],
  pipes: []
})
export class Angular2cliApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
