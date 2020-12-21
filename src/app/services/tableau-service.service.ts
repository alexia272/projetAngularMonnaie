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

      case('latest'):
        string = environment.apiUrl + 'latest';
        return this.http.get<any>(string);

      case('2019'):
        string = environment.apiUrl + '2019-12-01';
        return this.http.get<any>(string);

      case('2018'):
        string = environment.apiUrl + '2018-12-01';
        return this.http.get<any>(string);

      case('2017'):
        string = environment.apiUrl + '2017-12-01';
        return this.http.get<any>(string);

      case('2016'):
        string = environment.apiUrl + '2016-12-01';
        return this.http.get<any>(string);

      case('2015'):
        string = environment.apiUrl + '2015-12-01';
        return this.http.get<any>(string);

      case('2014'):
        string = environment.apiUrl + '2014-12-01';
        return this.http.get<any>(string);

      case('2013'):
        string = environment.apiUrl + '2013-12-01';
        return this.http.get<any>(string);

      case('2012'):
        string = environment.apiUrl + '2012-12-01';
        return this.http.get<any>(string);

      case('2011'):
        string = environment.apiUrl + '2011-12-01';
        return this.http.get<any>(string);

      case('2010'):
        string = environment.apiUrl + '2010-12-01';
        return this.http.get<any>(string);





  }
}


}
