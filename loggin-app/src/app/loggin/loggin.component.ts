import { User } from './../domains/User';
import { LogginService } from './loggin.service';
import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {


  constructor(private logginService: LogginService, private render: Renderer) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Eu loguei o usuario' );
  }

  lala(event){
    
        console.log('Eu loguei o usuario' );
      }

}
