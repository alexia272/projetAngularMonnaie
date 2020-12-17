import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { DevisesComponent } from './devises/devises.component';
import { HomeComponent } from './home/home.component';
import { MoneyConvertorComponent } from './money-convertor/money-convertor.component';
import { EurComponent } from './devises/eur/eur.component';
import { LivreComponent } from './devises/livre/livre.component';
import { DollarUsComponent } from './devises/dollar-us/dollar-us.component';
import { DollarCanadienComponent } from './devises/dollar-canadien/dollar-canadien.component';
import { FrancSuisseComponent } from './devises/franc-suisse/franc-suisse.component';
import { PesoComponent } from './devises/peso/peso.component';
import { RoubleComponent } from './devises/rouble/rouble.component';
import { YenComponent } from './devises/yen/yen.component';
import { YuanComponent } from './devises/yuan/yuan.component';
import { ShekelComponent } from './devises/shekel/shekel.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent

  },
  {
    path: 'MoneyConvertor', component: MoneyConvertorComponent
  },
  {
    path: 'devises', component: DevisesComponent
  },
  {
    path: 'devises/EURO', component: EurComponent
  },
  {
    path: 'devises/LIVRE', component: LivreComponent
  },
  {
    path: 'devises/DOLLAR-USA', component: DollarUsComponent
  },
  {
    path: 'devises/YEN', component: YenComponent
  },
  {
    path: 'devises/YUAN', component: YuanComponent
  },
  {
    path: 'devises/DOLLAR-CAN', component: DollarCanadienComponent
  },
  {
    path: 'devises/SHEKEL', component: ShekelComponent
  },
  {
    path: 'devises/PESO', component: PesoComponent
  },
  {
    path: 'devises/ROUBLE', component: RoubleComponent
  },
  {
    path: 'devises/FRANC-SUI', component: FrancSuisseComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
