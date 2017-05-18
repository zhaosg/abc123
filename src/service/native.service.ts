import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class NativeService {
  private ocodeformats: string = "EAN_8,EAN_13,UPC_E,UPC_A,CODE_128,CODE_39,ITF";
  private twocodeformats: string = "QR_CODE,PDF_417,DATA_MATRIX";
  private barcode: string = "barcodeScanner";

  constructor(private alertCtrl: AlertController, private storage: Storage) {
  }

  public nativeCallback(plugin: string, callback: Function) {
    var me = this;
    if (!window.hasOwnProperty('cordova')) {
      let alert = me.alertCtrl.create({
        title: '系统提示',
        subTitle: "请在手机上测试",
        buttons: ['确定']
      });
      alert.present();
    } else if (!window['cordova'].plugins[plugin]) {
      let alert = me.alertCtrl.create({
        title: '系统提示',
        subTitle: "请安装" + plugin + "插件",
        buttons: ['确定']
      });
      alert.present();
    } else {
      callback(me);
    }
  }

  public scanQrCode(successFunction: Function, failFunction: Function) {
    var option = {
      resultDisplayDuration: 500,
      formats: this.twocodeformats
    };
    this.nativeCallback(this.barcode, () => {
      window['cordova'].plugins.barcodeScanner.scan(successFunction, failFunction, option);
    });
  }

  public scanBarCode(successFunction: Function, failFunction: Function) {
    var option = {
      resultDisplayDuration: 500,
      formats: this.ocodeformats
    };
    this.nativeCallback(this.barcode, () => {
      window['cordova'].plugins.barcodeScanner.scan(successFunction, failFunction, option);
    });
  }

  public showVersion() {
    window['cordova'].getAppVersion.getVersionNumber().then(function (version) {
      alert(version)
    });
  }

  public teststrage() {
    this.storage.set('age', 28);
    this.storage.get('age').then((val) => {
      alert(val);
    });
  }
}
