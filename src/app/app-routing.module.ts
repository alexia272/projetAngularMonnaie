import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevisesComponent } from './devises/devises.component';
import { HomeComponent } from './home/home.component';
import { MoneyConvertorComponent } from './money-convertor/money-convertor.component';

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
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
