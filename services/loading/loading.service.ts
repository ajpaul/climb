import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async presentLoading(msg : string = "Loading", duration?: number) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: duration,
    });
    return await loading.present();
  }

  // NOT WORKING
  // dismiss() {
  //   this.loadingController.dismiss();
  // }
}
