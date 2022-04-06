import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 10000
  }

  // obtener info del service con getter
/*   get personajes(): Personaje[]{
    return this.dbzService.personajes;
  } */

  // Inyeccion de dependencias!!**
  constructor(){
  }
}
