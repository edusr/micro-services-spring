import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { AtivoComponent } from './ativo/ativo.component';
import { LogginService } from './loggin/loggin.service';

const appRoutes: Routes = [
  { path: 'ativo', component: AtivoComponent } ];

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    AtivoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
