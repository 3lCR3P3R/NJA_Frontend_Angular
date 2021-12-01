import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RUTAS } from "./app.routes";

import { AppComponent } from "./app.component";
import { OfertasComponent } from "./components/ofertas/ofertas.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosCategoriaComponent } from './components/productos-categoria/productos-categoria.component';

@NgModule({
  declarations: [AppComponent, OfertasComponent, InicioComponent, CategoriasComponent, ProductosComponent, QuienesSomosComponent, ContactenosComponent, HeaderComponent, FooterComponent, ProductosCategoriaComponent],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(RUTAS, {
      useHash: true,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
