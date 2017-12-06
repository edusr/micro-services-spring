import { LogginService } from './loggin/loggin.service';
import { User } from './domains/User';
import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  user = new User('', '');

  constructor(private _renderer: Renderer2 , private _logginService: LogginService) {
    document.body.style.background = '#db6b01';
  }

  onSubmit() {

    console.log('Eu loguei o usuario' + this.user.name + ' ' + this.user.password);
    this._logginService.postar( this.user );
  }


}
