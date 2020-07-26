import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HalloComponent } from './hallo/hallo.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProduktNameComponent } from './produkt-name/produkt-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HalloComponent,
    CatalogComponent,
    ProduktNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
