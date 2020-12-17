import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {​​ Devises }​​ from '../../classes/devises';
import {​​ DevisesService }​​ from '../../services/devises.service';

@Component({
  selector: 'app-franc-suisse',
  templateUrl: './franc-suisse.component.html',
  styleUrls: ['./franc-suisse.component.css']
})
export class FrancSuisseComponent implements OnInit {

  valeur: string;
  nom:string;
  symbol:string;
  input: string;
  httpBase = 'https://api.ratesapi.io/api/latest?';
  httpDate = 'latest';
  url: string;

  constructor() { }

  ngOnInit(): void {}

  lien(e) {

    switch(e.target.value){
      case'1':
      this.url = this.httpBase.concat('base=CHF&symbols=USD');
      this.nom = "Le Dollar-USA";
      this.symbol = " $";
      break;
      case'2':
      this.url = this.httpBase.concat('base=CHF&symbols=GBP');
      this.nom = "La livre";
      this.symbol = " £";
      break;
      case'3':
      this.url = this.httpBase.concat('base=CHF&symbols=JPY');
      this.nom = "Le Yen";
      this.symbol = " ¥";
      break;
      case'4':
      this.url = this.httpBase.concat('base=CHF&symbols=ILS');
      this.nom = "Le Shekel";
      this.symbol = " ₪";
      break;
      case'5':
      this.url = this.httpBase.concat('base=CHF&symbols=EUR');
      this.nom = "L'Euro'";
      this.symbol = " €";
      break;
      case'6':
      this.url = this.httpBase.concat('base=CHF&symbols=CAD');
      this.nom = "Le Dollar-Canadien";
      this.symbol = " $C";
      break;
      case'7':
      this.url = this.httpBase.concat('base=CHF&symbols=MXN');
      this.nom = "Le Peso";
      this.symbol = " MXN";
      break;
      case'8':
      this.url = this.httpBase.concat('base=CHF&symbols=RUB');
      this.nom = "Le Rouble";
      this.symbol = " ₽";
      break;
      case'9':
      this.url = this.httpBase.concat('base=CHF&symbols=CNY');
      this.nom = "Le Yuan";
      this.symbol = " ¥";
      break;
     }
     this.fetcheur();

  }

getValue(): void {
    var input = (<HTMLInputElement>document.getElementById('date')).value;
    input = input.toString();
    if (input === ""){
      input = 'latest';
    }
    this.url = this.url.replace(this.httpDate, input);
    this.httpBase = this.httpBase.replace(this.httpDate, input);
    this.httpDate = input;
    console.log(input);

  }

fetcheur(): void{
  this.getValue();
  console.log(this.url);
  fetch(this.url)
      .then(response => {return response.json();
       })
      .then(data => {
        var key  = Object.keys(data.rates)[0];
        this.valeur = data.rates[key];
      });

}
}
