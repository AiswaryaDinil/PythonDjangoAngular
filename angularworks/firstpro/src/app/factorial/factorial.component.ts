import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {
  fact:any=1
  i:any=1

  constructor() { }

  ngOnInit(): void {
  }
  factorial(num:any){
    let n=num.value;
     for(this.i=1; this.i<=n; this.i++) {
      this.fact=this.fact*this.i
      
    }
    
  }
}
