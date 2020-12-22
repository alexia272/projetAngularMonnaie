import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Devise } from '../app/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http: HttpClient) { }
  public getDevise(): Observable<Array<Devise>>{

    return this.http.get('/api/v1/full/EUR/json?key=6308|a5k67trS*U61GHjbqqBGpFO7ed1azA21')

    .pipe(
      map( (arrayJson: Array<object>) => [arrayJson].map(
        (itemJson: object) => new Devise ( itemJson['to'], itemJson['date'], itemJson['rate']))
      )
    );
  }

}
