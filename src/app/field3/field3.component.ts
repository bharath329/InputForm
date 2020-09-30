import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field3',
  template:`

  <p><b>Enter the details</b></p>

<button (click)="onClick()">Save</button>

<input #textbox type = "text" [(ngModel)]="name3" [disabled] ="disabledInput" >


   {{c}}
  
` ,
  styleUrls: ['./field3.component.css']
})
export class Field3Component implements OnInit {

  constructor() { }

  public name3 : "";

 

  public disabledInput = false;

  public c = "";

  

  
    ngOnInit() {
  }

onClick(){

  //this.enteredText3 = `${value}`

  if(this.name3){
    this.disabledInput=true;
    this.c=this.name3;
  }

  
  
}


}


  


