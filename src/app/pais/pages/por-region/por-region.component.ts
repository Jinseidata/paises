import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  public regiones: string[] = ['EU','EFTA','CARICOM','PA','AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];

  public regionActiva: string = '';

  public paises: Country[] = [];

  constructor( private regionService: PaisService) { }

  ngOnInit(): void {
  }


  public getClase (region:string): string{

    return  ( region === this.regionActiva ) ? 'btn btn-success m-2' : 'btn btn-outline-success m-2';


  }

  public activarRegion( region: string ){

      if ( region === this.regionActiva ) return;

      this.regionActiva = region;

      this.paises = [];

      

      this.regionService.buscarRegion( this.regionActiva )
        .subscribe( paises => {

          

          this.paises = paises;
          console.log(paises);

          console.log(paises[0].alpha2Code);
          
          
        })



  }

}
