import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
// import * as N2 from 'snapsvg';

// declare var Snap: any, mina: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, menu: MenuController) {
    menu.enable(true);
    // console.dir(N2);
  }

}
