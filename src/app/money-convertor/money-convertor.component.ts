import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormComponent } from './form/form.component';
import { stringify } from '@angular/compiler/src/util';
import { DevisesService } from '../devises.service';


@Component({
  selector: 'app-money-convertor',
  templateUrl: './money-convertor.component.html',
  styleUrls: ['./money-convertor.component.css']
})
export class MoneyConvertorComponent implements OnInit {

  valeur: string;


  constructor(public devisesService: DevisesService) {}


  ngOnInit(): void {


  }


  /*fetch_Data(): void{

    fetch(this.devisesService.lienHttpBaseSymbol)

      .then(response => {​​​​return response.json();

       }​​​​)

      .then(data => {​​​​

        this.devisesService.conversion = data.rates.GBP;

      }​​​​);
    console.log(this.devisesService.conversion);
  }*/

}
