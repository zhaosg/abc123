import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NativeService } from '../../service/native.service'

// import { NavController, MenuController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    { code: "qrcode", label: "二维码" },
    { code: "barcode", label: "条形码" },
    { code: "svg", label: "组态图" },
    { code: "echarts", label: "Echarts" }
  ];

  constructor(private alertCtrl: AlertController, private nativeService: NativeService) {

  }

  public itemSelected(item: object) {
    if (item['code'] == 'qrcode') {
      this.scanQR();
    } else if (item['code'] == 'barcode') {
      this.scanBarCode();
    }
  }

  public scanQR() {
    var me = this;
    this.nativeService.scanQrCode(function (result) {
      let alert = me.alertCtrl.create({
        title: '扫码结果',
        subTitle:
        "Result: " + result.text + "\n" +
        "Format: " + result.format + "\n" +
        "Cancelled: " + result.cancelled,
        buttons: ['确定']
      });
      alert.present();
    }, function () { });
  }

  public scanBarCode() {
    var me = this;
    this.nativeService.scanBarCode(function (result) {
      let alert = me.alertCtrl.create({
        title: '扫码结果',
        subTitle:
        "Result: " + result.text + "\n" +
        "Format: " + result.format + "\n" +
        "Cancelled: " + result.cancelled,
        buttons: ['确定']
      });
      alert.present();
    }, function () { });
  }
}
