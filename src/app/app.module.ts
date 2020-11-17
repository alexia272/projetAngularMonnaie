import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { DevisesComponent } from './devises/devises.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MoneyConvertorComponent } from './money-convertor/money-convertor.component';

@NgModule({
  declarations: [
    AppComponent,

    DevisesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MoneyConvertorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
