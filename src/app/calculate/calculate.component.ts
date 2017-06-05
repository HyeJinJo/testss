import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  num1:number = 0;
  num2:number = 0;
  isFirst = true;
  oper  = "+";
  result = 0;
  

  onClick(num:number){
    if(this.isFirst) {
      this.num1 = num;
    } else {
      this.num2 = num;
    }
  }

  onClickCal(oper){
    this.oper = oper;
    this.isFirst = false;
  }

  onClickDone(){
    switch(this.oper){
      case "+":
      this.result= this.num1 + this.num2;
      break;
      case "-":
      this.result= this.num1 - this.num2;
      break;
      case "/":
      this.result= this.num1 / this.num2;
      break;
      case "*":
      this.result= this.num1 + this.num2;
      break;

    }
    this.isFirst = true;
  }
  

}
