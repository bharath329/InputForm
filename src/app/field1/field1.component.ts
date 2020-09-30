import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field1',
 // templateUrl: './field1.component.html',

 template:`

 <p><b>Enter the details</b></p>

 <button (click)="onClick(textbox.value)"> Save</button>

 <input  #textbox type = "text" [(ngModel)] = "name">

{{enteredText}}

`,
  styleUrls: ['./field1.component.css']
})
export class Field1Component implements OnInit {

 public name = "";

 public enteredText = "";

  constructor() { }
  
   ngOnInit() {
}
onClick(value : string){
  this.enteredText=`${value}` ;
}
  
  

}
