import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino: string = "";
  public errorBusqueda: boolean = false;
  public capitales:Country[] = [];

  constructor(private capitalService: CapitalService) { }

  buscar( termino: string ){

    this.errorBusqueda = false;

    this.termino = termino;

    this.capitalService.buscarCapital( this.termino )
        .subscribe( capitales =>{
          console.log( capitales );
          this.capitales = capitales;
          
        }, ( err ) => {

          this.errorBusqueda = true;
          this.capitales = [];

        }
        
        
        
        )
        
    
      

  }

  sugerencias ( termino: string){

    this.errorBusqueda = false;

  }


}
