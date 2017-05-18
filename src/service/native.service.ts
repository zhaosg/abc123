import {Injectable} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { AppVersion } from '@ionic-native/app-version';

@Injectable()
export class NativeService {
  private ocodeformats: string = "EAN_8,EAN_13,UPC_E,UPC_A,CODE_128,CODE_39,ITF";
  private twocodeformats: string = "QR_CODE,PDF_417,DATA_MATRIX";
  private barcode: string = "barcodeScanner";

  constructor(private alertCtrl: AlertController,
              private storage: Storage,
              private camera:Camera,
              private appVersion:AppVersion,
              private barcodeScanner: BarcodeScanner
              ) {
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

  public paizhao() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      alert('xxxxxx');
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      alert('errr');
      alert(err);
    });
  }


  public scanCode() {
    return this.barcodeScanner.scan();
  }

  public showVersion() {
    this.appVersion.getVersionNumber().then(function (version) {
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
