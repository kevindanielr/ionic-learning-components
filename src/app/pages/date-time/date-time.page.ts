import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customDate;
  customPickerOptions;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [
        {
          text: 'Guadar',
          handler: ( data ) => {
            console.log('Clicked Save!');
            console.log(data.day.value+"-"+data.month.value+"-"+data.year.value);
          }
        },
        {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Dont dimisss!');
          }
        }
      ]
    };
  }

  cambioFecha( event ) {
    console.log(event);
    console.log(event.detail.value);
    console.log( new Date( event.detail.value ) );
  }

}
