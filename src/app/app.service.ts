import { Injectable } from '@angular/core';

const SPLITCHAR = '#';
const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  getConvertedStr(str: string): string {
    let finalStr = '';
    const arr = str.split(SPLITCHAR);
    const finalArr = [];
    arr.forEach((item) => {
      if (item !== '') {
        const val = this.getColumnName(+item);
        finalArr.push(val);
      }
    });
    finalStr = finalArr.join('');
    return finalStr;
  }
  private getColumnName = (i: number) => ALPHABETS[i % 26];
}
