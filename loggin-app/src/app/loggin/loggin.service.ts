import { User } from './../domains/User';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {HttpModule, Http, Response, Headers, RequestOptions, RequestMethod, Request} from '@angular/http';

@Injectable()
export class LogginService {

    constructor (private _http: Http) {}

  postar(user: User ) {

    const url = 'http://localhost:8080/oauth/token';
// var headers =
// new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
    const headers = new Headers(
      { 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authentication': 'Basic YWNtZTphY21lc2VjcmV0ZQ=='  });
    const options = new RequestOptions({ headers: headers });

    const body = JSON.stringify( user );

    console.log('UHUHUHUHU' + JSON.stringify( user ));

    const urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.append('username', 'eduardosr');
    urlSearchParams.append('password', 'Edu@rd01' );
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('client_id', 'acme');
    urlSearchParams.append('client_secret' , 'acmesecret');

    console.log(urlSearchParams.toString());

    const creds = 'username=eduardosr&password=Edu@rd01&grant_type=password&client_id=acme&client_secret=acmesecret';

    this._http.post(url ,   urlSearchParams.toString()    ,  options).map(res => res.json()).subscribe(
      data => { console.log(data); },
      err => { console.log(err); }
    );



    /*this._http.post(url ,
      {'username' : 'eduardosr' , 'password': 'Edu@rd01' , 'grant_type' : 'password', 'client_id' : 'acme' , 'client_secret' : 'acmesecret'} ,
       options).map(res => res.json()).subscribe(
      data => { console.log(data); },
      err => { console.log(err); }
    );*/
  }




  lala(user: User ) {
    
        const url = 'http://localhost:8080/user';
    // var headers =
    // new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
        const headers = new Headers(
          { 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' ,'X-Requested-With': 'XMLHttpRequest' , 'Access-Control-Allow-Origin' : '*' });
        const options = new RequestOptions({ headers: headers });
    
        const body = JSON.stringify( user );
    
        console.log('UHUHUHUHU' + JSON.stringify( user ));
    
        const urlSearchParams: URLSearchParams = new URLSearchParams();
        urlSearchParams.append('username', 'eduardosr');
        urlSearchParams.append('password', 'Edu@rd01' );
        urlSearchParams.append('grant_type', 'password');
        urlSearchParams.append('client_id', 'acme');
        urlSearchParams.append('client_secret' , 'acmesecret');
    
        console.log(urlSearchParams.toString());
    
        const creds = 'username=eduardosr&password=Edu@rd01&grant_type=password&client_id=acme&client_secret=acmesecret';
    
        this._http.post(url ,   urlSearchParams    ,
           options).map(res => res.json()).subscribe(
          data => { console.log(data); },
          err => { console.log(err); }
        );
    
    
    
        /*this._http.post(url ,
          {'username' : 'eduardosr' , 'password': 'Edu@rd01' , 'grant_type' : 'password', 'client_id' : 'acme' , 'client_secret' : 'acmesecret'} ,
           options).map(res => res.json()).subscribe(
          data => { console.log(data); },
          err => { console.log(err); }
        );*/
      }

  private extractData(res: Response) {
    const body = res.json();
    console.log('asdfadsf' + body);
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
