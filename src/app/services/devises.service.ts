import { Injectable } from '@angular/core';
import {​​ Observable }​​ from 'rxjs';
import {​​ Devises }​​ from '../classes/devises';
import {​​ HttpClient }​​ from '@angular/common/http';
import {​​ map}​​ from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevisesService {

  constructor(private http: HttpClient){  }

  getDevisesList(): Observable<Array<Devises>>
  {
    return this.http.get('https://api.ratesapi.io/api/latest').pipe(
      map( (arrayJson: Array<object>) => arrayJson.map(
        (itemJson: object) => new Devises ( itemJson['Devises.nom'], itemJson['Devises.valeur'], itemJson['Devises.histoire']))
      )
    );
  }
}
