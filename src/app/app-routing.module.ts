import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoneyConvertorComponent } from './money-convertor/money-convertor.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent

  },
  {
    path: 'MoneyConvertor', component: MoneyConvertorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
