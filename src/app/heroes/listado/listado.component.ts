import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

 heroes: string[]= ['Spiderman', 'Hulk', 'Iroman', 'Goku', 'Thor', 'Perro Jorge']

 heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
  
}
