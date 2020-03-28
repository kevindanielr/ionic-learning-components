import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( public alertCtrl: AlertController) { }

  ngOnInit() {
    this.titulo = "Alert Page";
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Cambia el nombre de la Página!',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nuevo nombre de la Página'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Boton Cancelar');
          }
        }, 
        {
          text: 'Guardar',
          handler: ( data ) => {
            console.log(data);
            this.titulo = data.txtNombre;
          }
          
        }
      ]
    });

    await alert.present();
  }

}
