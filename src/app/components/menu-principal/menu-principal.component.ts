import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {

  componentes: Observable<Componente[]>;//Es un observable que responde un arreglo de componentes

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
