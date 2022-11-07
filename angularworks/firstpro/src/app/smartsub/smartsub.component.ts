import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartsub',
  templateUrl: './smartsub.component.html',
  styleUrls: ['./smartsub.component.css']
})
export class SmartsubComponent implements OnInit {
  num1:any=0;
  num2:any=0;
  result:any=0;
  constructor() { }

  ngOnInit(): void {
  }
  smartSub(){
    if(this.num1>this.num2){
      this.result=this.num1-this.num2;
    }
    else{
      this.result=this.num2-this.num1;
    }
  }

}
