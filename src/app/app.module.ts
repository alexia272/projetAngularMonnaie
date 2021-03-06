import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DevisesComponent } from './devises/devises.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MoneyConvertorComponent } from './money-convertor/money-convertor.component';
import { HttpClientModule } from '@angular/common/http';
import { EurComponent } from './devises/eur/eur.component';
import { LivreComponent } from './devises/livre/livre.component';
import { DollarUsComponent } from './devises/dollar-us/dollar-us.component';
import { YuanComponent } from './devises/yuan/yuan.component';
import { YenComponent } from './devises/yen/yen.component';
import { PesoComponent } from './devises/peso/peso.component';
import { RoubleComponent } from './devises/rouble/rouble.component';
import { FrancSuisseComponent } from './devises/franc-suisse/franc-suisse.component';
import { DollarCanadienComponent } from './devises/dollar-canadien/dollar-canadien.component';
import { ShekelComponent } from './devises/shekel/shekel.component';
import { TableauComponent } from './tableau/tableau.component';

import { FormComponent } from './money-convertor/form/form.component';

import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DevisesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MoneyConvertorComponent,

    EurComponent,
    LivreComponent,
    DollarUsComponent,
    YuanComponent,
    YenComponent,
    PesoComponent,
    RoubleComponent,
    FrancSuisseComponent,
    DollarCanadienComponent,
    ShekelComponent,
    TableauComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-starter' }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent, DevisesComponent, MoneyConvertorComponent, FormComponent]
})
export class AppModule { }
