import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  i:any=0;
  flag:Number=0;
  res:Number=0;

  constructor() { }

  ngOnInit(): void {
  }
  checkPrime(){
    let n=num.value;
    for(this.i=0;this.i<n;this.i++){
      if(n%2==0){
        this.flag=1;
        break;
      }
      }
      if(this.flag=0){
        this.res="prime Number"
      }
      else{
        this.res="Not Prime Number"
    }

  }

}
