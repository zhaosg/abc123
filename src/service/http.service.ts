import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  要了解依赖注入，请查看，https://angular.io/docs/ts/latest/guide/dependency-injection.html
*/
@Injectable()
export class HttpService {
  constructor(protected http: Http) { }
  public get(url:string) {
    return new Promise(resolve => {
      //'https://randomuser.me/api/'
      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data);
      });
    });
  }

  public test() {
    return this.get('https://randomuser.me/api/');
  }
}
