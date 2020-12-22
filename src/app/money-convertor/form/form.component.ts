import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Devises } from '../../classes/devises';
import { DevisesService } from '../../services/devises.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  lienHttp = 'https://api.ratesapi.io/api/latest?base=XXX&symbols=YYY';
  re1 = /XXX/gi;
  re2 = /YYY/gi;
  lienHttpbase: string;
  valeurUnit: number;
  valeur: number;
  result: string;
  montant: string;
  depart: string;
  valeurString: string;
  arrive: string;
  tauxActuel = 'Taux actuel = ';
  taux: string;
  isAvailable: boolean;

  constructor(public devisesService: DevisesService) { }

  ngOnInit(): void {



  }

  onFormSubmit(userForm: NgForm): void {
    console.log(userForm.value);
    this.devisesService.montant = userForm.controls['montant'].value;
    this.devisesService.depart = userForm.controls['monnaie_depart'].value;
    this.devisesService.arrive = userForm.controls['monnaie_arrive'].value;

    this.lienHttpbase = this.lienHttp.replace(this.re1, this.devisesService.depart);
    this.devisesService.lienHttpBaseSymbol = this.lienHttpbase.replace(this.re2, this.devisesService.arrive);

    this.valeurUnit = this.devisesService.fetch_Data(this.devisesService.arrive);
    this.valeur = this.valeurUnit * this.devisesService.montant;
    if (isNaN(this.valeur)) {
      this.isAvailable = false;
    }
    else {
      this.isAvailable = true;
    }
    this.montant = this.devisesService.montant.toString();
    this.depart = this.devisesService.depart.toString();
    this.valeurString = this.valeur.toString();
    this.arrive = this.devisesService.arrive.toString();
    this.result = this.montant.concat(' ', this.depart, ' ', '=', ' ', this.valeurString, ' ', this.arrive);

    this.taux = this.tauxActuel.concat(' ', this.valeurUnit.toString());

  }
  resetUserForm(userForm: NgForm): void {
    userForm.resetForm();
  }

}
