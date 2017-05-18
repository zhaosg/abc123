import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NativeService } from '../../service/native.service'
import { ApiService } from '../../service/api.service'
import { AppVersion } from '@ionic-native/app-version';

// import { NavController, MenuController } from 'ionic-angular';
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})
export class DemoPage {
  items = [
    { code: "barcode", label: "二维码/条形码" },
    { code: "svg", label: "组态图" },
    { code: "echarts", label: "Echarts" },
    { code: "version", label: "显示版本号" },
    { code: "paizhao", label: "拍照" },
    { code: "storage", label: "存储" },
    // { code: "http", label: "Http" },
    { code: "people", label: "Http" }
  ];

  constructor(private alertCtrl: AlertController,
    private nativeService: NativeService,
    private api: ApiService,
    private appVersion: AppVersion) {

  }

  public itemSelected(item: object) {
    if (item['code'] == 'barcode') {
      this.scanCode();
    } else if (item['code'] == 'version') {
      this.nativeService.showVersion();
    } else if (item['code'] == 'paizhao') {
      this.nativeService.paizhao();
    } else if (item['code'] == 'storage') {
      this.nativeService.teststrage();
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

  public scanCode() {
    let me = this;
    this.nativeService.scanCode().then((result) => {
      let alert = this.alertCtrl.create({
        title: '扫码结果',
        subTitle: "Result: " + result.text + "\nFormat: " + result.format + "\nCancelled: " + result.cancelled,
        buttons: ['确定']
      });
      alert.present();
    }, (err) => {
    });
  }
}
