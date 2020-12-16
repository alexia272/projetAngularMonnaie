import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DevisesComponent } from './devises/devises.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MoneyConvertorComponent } from './money-convertor/money-convertor.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,DevisesComponent]
})
export class AppModule { }
