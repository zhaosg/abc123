import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class NativeService {
  private ocodeformats: string = "EAN_8,EAN_13,UPC_E,UPC_A,CODE_128,CODE_39,ITF";
  private twocodeformats: string = "QR_CODE,PDF_417,DATA_MATRIX";
  private barcode: string = "barcodeScanner";

  constructor(private alertCtrl: AlertController) { }
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
    this.nativeCallback(this.barcode, function (me) {
      window['cordova'].plugins.barcodeScanner.scan(successFunction, failFunction, option);
    });
  }

  public scanBarCode(successFunction: Function, failFunction: Function) {
    var option = {
      resultDisplayDuration: 500,
      formats: this.ocodeformats
    };
    this.nativeCallback(this.barcode, function (me) {
      window['cordova'].plugins.barcodeScanner.scan(successFunction, failFunction, option);
    });
  }
}