import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Devises } from '../../classes/devises';
import { DevisesService } from '../../devises.service';
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
  essai: number;
  valeur: number;

  constructor(public devisesService: DevisesService) { }

  ngOnInit(): void {



  }

  onFormSubmit(userForm: NgForm): void{
    console.log(userForm.value);
    this.devisesService.montant = userForm.controls['montant'].value;
    this.devisesService.depart = userForm.controls['monnaie_depart'].value;
    this.devisesService.arrive = userForm.controls['monnaie_arrive'].value;

    this.lienHttpbase = this.lienHttp.replace(this.re1, this.devisesService.depart);
    this.devisesService.lienHttpBaseSymbol = this.lienHttpbase.replace(this.re2, this.devisesService.arrive);
    console.log(this.devisesService.arrive);

    this.essai = this.devisesService.fetch_Data(this.devisesService.arrive);
    this.valeur = this.essai * this.devisesService.montant;
    console.log(this.valeur);
  }
  resetUserForm(userForm: NgForm): void{
    userForm.resetForm();
  }


}
