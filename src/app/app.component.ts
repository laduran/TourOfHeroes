import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Tour of Heroes';

  onActivate(event: any) {
    console.log("onActivate")
    console.log(event)
  }

  onDeactivate(event: any) {
    console.log("onDeactivate")
    console.log(event)
  }
}
