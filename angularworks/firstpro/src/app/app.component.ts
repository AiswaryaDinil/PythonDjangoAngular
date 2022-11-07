import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  name="Angular Works";
  framework={name:"Angular",languague:"Type-script",rating:4.5}
}
