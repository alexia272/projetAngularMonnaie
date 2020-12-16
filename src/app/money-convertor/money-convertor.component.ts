import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Devise } from '../devise';
import { DeviseService } from '../devise.service';

@Component({
  selector: 'app-money-convertor',
  templateUrl: './money-convertor.component.html',
  styleUrls: ['./money-convertor.component.css']
})
export class MoneyConvertorComponent implements OnInit {

  items = new Array<Devise>();
  valeur : string;
  
  test : any;
  devise =  Array<Devise>();

 
  /*items = [
    {
    name: 'euro',
    value: 1,
    },
    {
      name: 'dollar',
      value: 1.5,
    }
  ];*/

  constructor(private deviseService : DeviseService) {}


  ngOnInit(): void {
    this.items.push(new Devise('livre' , 1.23));
    this.deviseService.getDevise().subscribe(
      (nextValue: Array<Devise>) => this.devise = nextValue );

      //return JSON.parse(this.test);
    console.log(this.devise);
   

    /*fetch('v1/full/EUR/json?key=6308|a5k67trS*U61GHjbqqBGpFO7ed1azA21')

    .then(response => {​​​​return response.json(); }​​​​).then(data => {​​​​
      this.a = data.from;
      this.valeur = data.rate;

    }​​​​);*/
    /*this.test = this.deviseService.getDevise().subscribe(
      devise => this.devise = devise
    );*/
    //this.devise.push(this.test);

    console.log(this.test);
    
    fetch('https://api.ratesapi.io/api/2010-01-12?base=USD')

      .then(response => {​​​​return response.json();

       }​​​​)

      .then(data => {​​​​

        this.valeur = data.rates.GBP;

      }​​​​);
      console.log(this.valeur);
  }

}
