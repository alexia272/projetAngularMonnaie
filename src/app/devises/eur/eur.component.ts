import { Component, OnInit, ViewChild } from '@angular/core';
import { stringify } from 'querystring';
import {​​ Devises }​​ from '../../classes/devises';

import {ChartsModule, Label, Color} from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import {​​ DevisesService }​​ from '../../services/devises.service';

@Component({
  selector: 'app-eur',
  templateUrl: './eur.component.html',
  styleUrls: ['./eur.component.css']
})
export class EurComponent implements OnInit {



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    showLine: true,
    title: {
      display: true,
      text: 'Devises en € année 2020 (cliquer sur une devise)',
      fontColor: 'black',
      textSize: 50
    },
    scales: {
      xAxes: [{
        stacked: false,
        ticks: {
          fontColor: 'black',
        },
        gridLines: {
          color: '#5f5e5e'
        },
        scaleLabel: {
          display: true,
          labelString: 'Mois',
          fontColor: 'black',
        }
      }],
      yAxes: [{
        stacked: false,
        ticks: {
          fontColor: 'black',
          min: 0,
          beginAtZero: true,

        },
        gridLines: {
          color: '#5f5e5e'
        },
        scaleLabel: {
          display: true,
          labelString: 'Valeur en €',
          fontColor: 'black',
        }
      }]
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'black',
      },
    }
  };


  public barChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      label: 'Le Dollar-USA',
      backgroundColor: 'rgba(238, 83, 79, 1)'},

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
       label: 'La livre',
       backgroundColor: 'rgba(0, 0, 255, 1)'},

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      label: 'Le Yen',
      backgroundColor: 'rgba(192, 192, 192, 1)'},

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
       label: 'Le Shekel',
       backgroundColor: 'rgba(0, 255, 255, 1)'},

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
       label: 'Le Dollar-Canadien',
       backgroundColor: 'rgba(0, 128, 128, 1)'},

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
       label: 'Le Franc-Suisse',
       backgroundColor: 'rgba(235, 28, 69, 1)'},

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
       label: 'Le Peso',
       backgroundColor: 'rgba(0, 128, 0, 1)'},

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
       label: 'Le Rouble',
       backgroundColor: 'rgba(128, 0, 0, 1)'},

    {data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
       label: 'Le Yuan',
       backgroundColor: 'rgba(255, 255, 0, 1)'},
  ];


  valeur: string;
  nom: string;
  symbol: string;
  input: string;
  httpBase = 'https://api.ratesapi.io/api/latest?';
  httpDate = 'latest';
  url: string;

  annee = 'latest';
  urlYear = 'https://api.ratesapi.io/api/';
  httpBaseYear = 'https://api.ratesapi.io/api/';
  httpDateYear = 'latest';
  listpays = ['USD', 'GBP', 'JPY', 'ILS', 'CAD', 'CHF', 'MXN', 'RUB', 'CNY'];


  constructor() {

    this.get12value();
   }

  ngOnInit(): void {}


  lien(e) {

    switch (e.target.value){
      case'1':
      this.url = this.httpBase.concat('base=EUR&symbols=USD');
      this.nom = 'Le Dollar-USA';
      this.symbol = ' $';
      break;
      case'2':
      this.url = this.httpBase.concat('base=EUR&symbols=GBP');
      this.nom = 'La livre';
      this.symbol = ' £';
      break;
      case'3':
      this.url = this.httpBase.concat('base=EUR&symbols=JPY');
      this.nom = 'Le Yen';
      this.symbol = ' ¥';
      break;
      case'4':
      this.url = this.httpBase.concat('base=EUR&symbols=ILS');
      this.nom = 'Le Shekel';
      this.symbol = ' ₪';
      break;
      case'5':
      this.url = this.httpBase.concat('base=EUR&symbols=CAD');
      this.nom = 'Le Dollar-Canadien';
      this.symbol = ' $C';
      break;
      case'6':
      this.url = this.httpBase.concat('base=EUR&symbols=CHF');
      this.nom = 'Le Franc-Suisse';
      this.symbol = ' CHF';
      break;
      case'7':
      this.url = this.httpBase.concat('base=EUR&symbols=MXN');
      this.nom = 'Le Peso';
      this.symbol = ' MXN';
      break;
      case'8':
      this.url = this.httpBase.concat('base=EUR&symbols=RUB');
      this.nom = 'Le Rouble';
      this.symbol = ' ₽';
      break;
      case'9':
      this.url = this.httpBase.concat('base=EUR&symbols=CNY');
      this.nom = 'Le Yuan';
      this.symbol = ' ¥';
      break;
     }
    this.fetcheur();



  }

getValue(): void {
    var input = (<HTMLInputElement>document.getElementById('date')).value;
    input = input.toString();
    if (input === ''){
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
get12value(): void{

  var a = 1;
  for (let index = 0; index < 12; index++)
  {
    for (let index1 = 0; index1 < 9; index1++) {
     if (a < 10)
      {
        this.urlYear = this.httpBaseYear.concat('2020', '-0', String(a), '-01?base=', this.listpays[index1], '&symbols=EUR');
        fetch(this.urlYear)
          .then(response => {return response.json();
          })
          .then(data => {
            this.barChartData[index1].data[index] = data.rates.EUR;
         });


     }
      else{
        this.urlYear = this.httpBaseYear.concat('2020', '-', String(a), '-01?base=', this.listpays[index1], '&symbols=EUR');
        fetch(this.urlYear)
         .then(response => {return response.json();
           })
          .then(data => {
            this.barChartData[index1].data[index] = data.rates.EUR;
         });

        }
    }
    Number(a);
    a = a + 1;
  }


}
getYear(): void{
  this.annee = (<HTMLInputElement>document.getElementById('annee')).value;
  if (this.annee > '2020'){
    this.annee = '2020';
  }
  if (this.annee === ''){
    this.annee = 'latest';
  }
  console.log(this.annee);


}
}



