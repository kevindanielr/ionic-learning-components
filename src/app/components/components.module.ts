import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    MenuPrincipalComponent
  ]
})
export class ComponentsModule { }
