import {Injectable} from '@angular/core';
import {HTTP} from '@ionic-native/http';

@Injectable()
export class ApiService {
  constructor(private http: HTTP) {
  }

  public load() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {
        alert(data.status)
        // console.log(data.status);
        // console.log(data.data); // data received by server
        // console.log(data.headers);
      })
      .catch(error => {
        // console.log(error.status);
        // console.log(error.error); // error message as string
        // console.log(error.headers);
      });
  }
}
