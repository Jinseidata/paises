import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
     li{ cursor: pointer;}
    `

  ]
})
export class PorPaisComponent{

  public termino: string = "";
  public errorBusqueda: boolean = false;
  public paises:Country[] = [];
  public paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string ){

    this.errorBusqueda = false;

    this.termino = termino;

    this.paisService.buscarPais( this.termino )
        .subscribe( paises =>{
          console.log( paises );
          this.paises = paises;
          
        }, ( err ) => {

          this.errorBusqueda = true;
          this.paises = [];

        }
        
        
        
        )
        
    
      

  }

  sugerencias ( termino: string){

    this.errorBusqueda = false;

    this.paisService.buscarPais( termino)
      .subscribe ( paises => this.paisesSugeridos = paises.splice(0,5),
      ( err ) => this.paisesSugeridos = []

      )}


}
