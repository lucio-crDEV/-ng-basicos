import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        // ofrece directivas mas avanzadas como *ngFor o *ngIf, sin el commonModule no importamos estas funcionalidades
        CommonModule
    ]
})

export class HeroesModule {

}