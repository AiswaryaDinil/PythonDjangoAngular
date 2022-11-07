import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intrest',
  templateUrl: './intrest.component.html',
  styleUrls: ['./intrest.component.css']
})
export class IntrestComponent implements OnInit {
  amt:any=0;
  intrest:any=0;
  result:any=0;

  constructor() { }

  ngOnInit(): void {
  }
  findIntrest(){
    this.result=(this.amt*this.intrest)/10;
  }

}
