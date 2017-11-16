import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { AtivoComponent } from './ativo/ativo.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
