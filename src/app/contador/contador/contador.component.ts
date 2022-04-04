import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }} </h1>
        <p>La base es <strong>{{base}}</strong></p>
        <!-- comentarios del ejercicio anterior -->
        <!-- <button (click)="numero = numero + 1"> + 1 </button> -->
        <button (click)="acumular(base)"> + {{base}}</button>

        <span> {{numero}} </span>

        <!-- <button (click)="numero = numero - 1"> - 1 </button> -->
        <button (click)="acumular(-base)"> - {{base}}</button>
    
    `
})

export class ContadorComponent {
  // Por default es public, queda a gusto agregarlo o no. 
  public titulo: string = 'Acumulador App!'
  
  // ahora no las agregare y obtendre el mismo efecto:
  numero:number = 10
  base: number = 5

  // con métodos
  acumular( valor: number ){
    this.numero += valor
  }
}