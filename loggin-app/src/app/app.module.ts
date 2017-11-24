import { LogginService } from './loggin/loggin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
