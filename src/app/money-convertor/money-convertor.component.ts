import { Component, OnInit } from '@angular/core';
import { DevisesService } from '../services/devises.service';


@Component({
  selector: 'app-money-convertor',
  templateUrl: './money-convertor.component.html',
  styleUrls: ['./money-convertor.component.css']
})
export class MoneyConvertorComponent implements OnInit {

  constructor(public devisesService: DevisesService) {}


  ngOnInit(): void { }


}
