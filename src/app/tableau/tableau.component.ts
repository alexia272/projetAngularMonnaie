import { Component, OnInit,  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { tableauService } from '../services/tableau-service.service'

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  monnaie: any;
  monnaie2019: any;
  monnaie2018: any;
  monnaie2017: any;
  myArray = [];


  constructor(
    private monnaieService : tableauService
  ) {
  }

  async ngOnInit() {

    this.monnaie = await this.monnaieService.getMonnaie('2019').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2018').toPromise();
    this.myArray.push(this.monnaie);
    console.log(this.monnaie)



  }
}
