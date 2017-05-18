import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {NativeService} from '../../service/native.service'
// import { NavController, MenuController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {code: "qrcode", label: "二维码"},
    {code: "barcode", label: "条形码"},
    {code: "svg", label: "组态图"},
    {code: "echarts", label: "Echarts"},
    {code: "http", label: "Http"}
  ];

  constructor(private alertCtrl: AlertController,
              private nativeService: NativeService) {

  }

  public itemSelected(item: object) {

  }

}
