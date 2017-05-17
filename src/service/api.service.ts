import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpService } from './http.service'
@Injectable()
export class ApiService extends HttpService {
  constructor(protected http: Http) {
    super(http);
  }

  // public ghttp() {
  //   return window['cordovaHTTP'];
  // }
  /**
   * 作为一个例子，仅供参考
   */
  public searchPlace() {
    let url = 'http://api.map.baidu.com/place/v2/search?query=银行&page_size=10&page_num=0&scope=1&region=北京&output=json&ak=mVYTvcSupGWpGMLbc2nBa3EM3EAQCRX7';
    return this.get(url);
  }
}
