import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RUTAS } from "./app.routes";

import { AppComponent } from "./app.component";
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from './components/login/login.component';
import { OfertasComponent } from "./components/ofertas/ofertas.component";
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosAddComponent } from './components/productos-add/productos-add.component';
import { ProductosCategoriaComponent } from './components/productos-categoria/productos-categoria.component';
import { ProductosEditComponent } from './components/productos-edit/productos-edit.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VenderComponent } from './components/vender/vender.component';

@NgModule({
  declarations: [AppComponent,
    CategoriasComponent,
    CerrarSesionComponent,
    ContactenosComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    LoginComponent,
    OfertasComponent,
    ProductosComponent,
    ProductosAddComponent,
    ProductosCategoriaComponent,
    ProductosEditComponent,
    ProductosListComponent,
    QuienesSomosComponent,
    RegistroComponent,
    VenderComponent
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RUTAS, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
