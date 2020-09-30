import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field2',

  template: `

  <p><b>Enter the details</b> </p>
  
  <p><strong>Note</strong>:Only Numbers are Allowed</p>
  
 <button (click) = "onClick(textbox.value)"> Save </button>
  
  <input #textbox type = "number" [(ngModel)] = "name2">

  {{enteredNumber}}
  `,
  styleUrls: ['./field2.component.css']
})
export class Field2Component implements OnInit {

  constructor() { }

  public name2 :"";

  public enteredNumber = "";

  ngOnInit() {
  }
 onClick(value1 : string){
   this.enteredNumber = `${value1}`
 }
}
