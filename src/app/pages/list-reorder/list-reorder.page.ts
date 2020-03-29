import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Batman', 'Superman', 'Aquaman', 'Linterna Verde', 'Wonder Woman'];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ) {
    const itemMover = this.personajes.splice( event.detail.from, 1 )[0];// Regresa el item que movimos
    this.personajes.splice( event.detail.to, 0, itemMover );// Insertando el numero en la posicion correcta
    event.detail.complete();// Completar el event de mover
  }

  onClick() {
    console.log(this.personajes);
  }

}
