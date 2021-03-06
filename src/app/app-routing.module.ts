import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduktNameComponent } from './produkt-name/produkt-name.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'first-component/:id', component: ProduktNameComponent },
  // { path: '**', component: CatalogComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
