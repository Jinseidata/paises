import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';




@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v3.1';

  private apiUrlRegion: string = 'https://restcountries.com/v2/regionalbloc';

  constructor( private http: HttpClient ) { }

  public  buscarPais( termino: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;
    
    return  this.http.get<Country[]>(url);
  }

  public  getPaisPorAlpha( id: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/alpha/${id}`;
    
    return  this.http.get<Country[]>(url);
  }

  public  buscarRegion( region: string): Observable<Country[]>{

    const params = new HttpParams()
        .set('fields', 'name,altSpellings,capital,population,flags' );
    
    const url = `${this.apiUrlRegion}/${region}`;

    
    
    return  this.http.get<Country[]>(url, { params });

  

  }  


  
}
  



