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
  myArray = [];
  choixUser: any;
  choixUser1: any;
  choixUser2: any;
  Choix: any;
  selctMyarray= this.myArray[1];
  itemSelected: any;


  constructor(
    private monnaieService : tableauService
  ) {
  }

  async ngOnInit() {

    this.monnaie = await this.monnaieService.getMonnaie('latest').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2019').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2018').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2017').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2016').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2015').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2014').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2013').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2012').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2011').toPromise();
    this.myArray.push(this.monnaie);
    this.monnaie = await this.monnaieService.getMonnaie('2010').toPromise();
    this.myArray.push(this.monnaie);
    console.log(this.myArray)

    this.Choix = this.choixUser;

  }

  onChange(){
    console.log(this.itemSelected)
  }
}
