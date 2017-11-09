import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _renderer: Renderer2) {
    document.body.style.background = '#db6b01';
  }
}
