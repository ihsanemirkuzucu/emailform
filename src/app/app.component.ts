import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email : string = 'Enter a mail..';

  onSubmit()
  {
    console.log(this.email);
  }
}
