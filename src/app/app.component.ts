import {Component} from '@angular/core'
  ;
import {IUser} from "./interfaces";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser

  catchUser($event: IUser) {
    console.log('app')
    this.user = $event
  }
}
