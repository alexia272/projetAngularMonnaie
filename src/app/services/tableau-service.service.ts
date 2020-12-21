import { from } from "rxjs";
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class tableauService {

  constructor(
    private http: HttpClient
  ) {}

  getMonnaie(year){
    let string = '';
    switch(year){

      case('2018'):
        string = environment.apiUrl + 'latest';
        return this.http.get<any>(string);

      case('2019'):
        string = environment.apiUrl + '2019-12-01';
        return this.http.get<any>(string);

  }
}


}
