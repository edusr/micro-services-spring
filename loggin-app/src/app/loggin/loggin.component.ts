import { User } from './../domains/User';
import { LogginService } from './loggin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  constructor(private logginService: LogginService) { }

  ngOnInit() {
  }

  submit(){
    let user = {name: 'user' , password: 'lala'};
    this.logginService.postar(user );
  }

}
