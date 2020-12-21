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
    return this.http.get('https://api.devises.org/v1/full/EUR/json?key=6308|a5k67trS*U61GHjbqqBGpFO7ed1azA21').pipe(
      map( (arrayJson: Array<object>) => arrayJson.map(
        (itemJson: object) => new Devises ( itemJson['Devises.nom'], itemJson['Devises.valeur'], itemJson['Devises.histoire']))
      )
    );
  }
}
