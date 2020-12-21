import { Component, OnInit } from '@angular/core';
import { DevisesService } from '../services/devises.service';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';




@Component({
  selector: 'app-devises',
  templateUrl: './devises.component.html',
  providers:[DevisesService],
  styleUrls: ['./devises.component.css']
})
export class DevisesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void { }

}




