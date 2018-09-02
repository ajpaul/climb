import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async presentToast(msg: string, duration: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration
    });
    toast.present();
  }

  async presentToastWithOptions(msg: string, showClose: boolean, position: "top" | "bottom", closeText: string) {
    const toast = await this.toastController.create({
      message: msg,
      showCloseButton: showClose,
      position: position,
      closeButtonText: closeText
    });
    toast.present();
  }
}
