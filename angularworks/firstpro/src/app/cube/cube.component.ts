import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  cube:Number=1
  constructor() { }

  ngOnInit(): void {
  }
  findCube(num:any){
    let n=num.value;
    this.cube=n**3
  }

}
