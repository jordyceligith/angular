import { Component } from '@angular/core';

@Component({
    selector:'mi-componente',
    templateUrl: './mi-componente.component.html',
    styleUrls: ['./mi-componente.component.css']

})

export class MiComponente{
    public titulo: string;
    public comentario: string;
    //public telefono: number;
    constructor(){
        this.titulo="Presupuesto para el dominio";
   
      //  this.telefono=22222;
    }
}