import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormComponent } from './form/form.component';
import { stringify } from '@angular/compiler/src/util';
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
