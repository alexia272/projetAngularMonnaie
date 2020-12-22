import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DevisesService {

  montant: number;
  depart: string;
  arrive: string;
  lienHttpBaseSymbol: string;
  conversion: number;


  constructor() { }

  fetch_Data(arrive: string): number {
    fetch(this.lienHttpBaseSymbol)

      .then(response => {
        return response.json();

      })

      .then(data => {
        switch (arrive) {
          case 'USD':
            this.conversion = data.rates.USD;
            break;
          case 'GBP':
            this.conversion = data.rates.GBP;
            break;
          case 'EUR':
            this.conversion = data.rates.EUR;
            break;
          case 'JPY':
            this.conversion = data.rates.JPY;
            break;
          case 'MXN':
            this.conversion = data.rates.MXN;
            break;
          case 'CAD':
            this.conversion = data.rates.CAD;
            break;
          case 'CHF':
            this.conversion = data.rates.CHF;
            break;
          case 'ILS':
            this.conversion = data.rates.ILS;
            break;
          case 'CNY':
            this.conversion = data.rates.CNY;
            break;
          case 'RUB':
            this.conversion = data.rates.RUB;
            break;
        }
      });
    return Number(this.conversion);
  }
}
