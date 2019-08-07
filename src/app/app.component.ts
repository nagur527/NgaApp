import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NgaApp';
  str: string;
  outputStr: string;
  numberKeys: any[];
  typedVal: string;
  constructor(private appService: AppService) {
    this.str = '';
    this.outputStr = '';
    this.numberKeys = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  }
  selectNumber(num: any) {
    this.str += num;
    this.typedVal = num;
    this.outputStr = this.appService.getConvertedStr(this.str);
  }
  clearValue() {
    this.str = this.str.slice(0, -1);
    this.outputStr = this.appService.getConvertedStr(this.str);
  }
}
