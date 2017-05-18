import {Injectable} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {AppVersion} from '@ionic-native/app-version';

@Injectable()
export class NativeService {
  constructor(private alertCtrl: AlertController,
              private storage: Storage,
              private nativecCamera: Camera,
              private appVersion: AppVersion,
              private barcodeScanner: BarcodeScanner) {
  }

  public camera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.nativecCamera.DestinationType.DATA_URL,
      encodingType: this.nativecCamera.EncodingType.JPEG,
      mediaType: this.nativecCamera.MediaType.PICTURE
    }
    this.nativecCamera.getPicture(options).then((imageData) => {
      alert('拍照成功');
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
      alert(err);
    });
  }


  public scanCode() {
    return this.barcodeScanner.scan();
  }

  public getVersionNumber() {
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
