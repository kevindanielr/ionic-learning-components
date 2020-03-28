import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData( event ) {

    setTimeout(() => {

      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true; //Desactivar infinite scroll
        //event.target.disable = true;
        return;
      }


      const nuevoArray = Array(20);
      this.data.push(...nuevoArray);
      event.target.complete(); //Para finalizar la carga y que puedan cargar los demas
    }, 1000);

  }

}
