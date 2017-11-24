import { User } from './../domains/User';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";
import {HttpModule, Http, Response, Headers, RequestOptions, RequestMethod, Request} from '@angular/http';



@Injectable()
export class LogginService {

    constructor (private _http: Http) {}

  postar(uset: User ) {

    const url = 'http://localhost:8080/encomendas/';

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify( uset );
    console.log(JSON.stringify( uset ));

    return this._http.post(url, body, options )
        .map( this.extractData ).catch(this.handleError);
  }


  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure

    let errMsg: string;
    if (error instanceof Response) {

          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          console.log('--------' + body + error) ;
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        console.log('bbb ');
          errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
}

}
