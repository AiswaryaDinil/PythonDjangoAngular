import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  result:Number=0

  constructor() { }

  ngOnInit(): void {
  }
  addNumbers(num1:any,num2:any){
    let n1=Number(num1.value)
    let n2=Number(num2.value)
    this.result=n1+n2;
    
  }

}
