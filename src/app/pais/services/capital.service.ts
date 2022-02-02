import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

 
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  public  buscarCapital ( termino: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/capital/${termino}`;
    
    return  this.http.get<Country[]>( url );
  }


}

