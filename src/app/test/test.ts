import { Component } from '@angular/core';

@Component({
    // selector: '.app-test', for class selector we do like this
  selector: '[app-test]',
    // selector: '.app-test',
  template: `<div>
  This is 
  Inline <br/>
   vedamaniakntaj<br/></div>`,
  styles: [`div {
    color: red;
    font-weight: bold;}`]
})
export class Test {
getName(){
  return "vedamaniakanta";
}
}
