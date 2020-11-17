import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DevisesComponent } from './devises/devises.component';
=======
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 336efd601e1a8b1a8729ea73e44d3e7a27e0f147

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DevisesComponent
=======
    HomeComponent,
    HeaderComponent,
    FooterComponent
>>>>>>> 336efd601e1a8b1a8729ea73e44d3e7a27e0f147
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
