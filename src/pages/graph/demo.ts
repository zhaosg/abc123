import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NativeService } from '../../service/native.service'
import { ApiService } from '../../service/api.service'

// import { NavController, MenuController } from 'ionic-angular';
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})
export class DemoPage {
  items = [
    { code: "qrcode", label: "二维码" },
    { code: "barcode", label: "条形码" },
    { code: "svg", label: "组态图" },
    { code: "echarts", label: "Echarts" },
    { code: "http", label: "Http" },
    { code: "people", label: "people" }
  ];

  constructor(private alertCtrl: AlertController,
    private nativeService: NativeService,
    private api: ApiService) {
  }

  public itemSelected(item: object) {
    if (item['code'] == 'qrcode') {
      this.scanQR();
    } else if (item['code'] == 'barcode') {
      this.scanBarCode();
    } else if (item['code'] == 'http') {
      this.api.searchPlace().then(function (data) {
        console.dir(data);
      });
    } else if (item['code'] == 'people') {
      this.api.test().then(function (data) {
        alert(data['results'][0].email);
      });
    }
  }

  public scanQR() {
    let me = this;
    this.nativeService.scanQrCode(result => {
      let alert = me.alertCtrl.create({
        title: '扫码结果',
        subTitle: "Result: " + result.text + "\nFormat: " + result.format + "\nCancelled: " + result.cancelled,
        buttons: ['确定']
      });
      alert.present();
    }, function () {
    });
  }

  public scanBarCode() {
    let me = this;
    this.nativeService.scanBarCode(result => {
      let alert = me.alertCtrl.create({
        title: '扫码结果',
        subTitle: "Result: " + result.text + "\nFormat: " + result.format + "\nCancelled: " + result.cancelled,
        buttons: ['确定']
      });
      alert.present();
    }, function () {
    });
  }
}
