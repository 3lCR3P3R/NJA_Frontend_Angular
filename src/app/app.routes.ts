import { Routes } from "@angular/router";

import { CerrarSesionComponent } from "./components/cerrar-sesion/cerrar-sesion.component";
import { ContactenosComponent } from "./components/contactenos/contactenos.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";
import { OfertasComponent } from "./components/ofertas/ofertas.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { ProductosAddComponent } from "./components/productos-add/productos-add.component";
import { ProductosCategoriaComponent } from "./components/productos-categoria/productos-categoria.component";
import { ProductosEditComponent } from "./components/productos-edit/productos-edit.component";
import { ProductosListComponent } from "./components/productos-list/productos-list.component";
import { QuienesSomosComponent } from "./components/quienes-somos/quienes-somos.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { VenderComponent } from "./components/vender/vender.component";

export const RUTAS: Routes = [
  // { path: "", component: InicioComponent },
  {path: 'cerrar-sesion', component: CerrarSesionComponent},
  { path: "contactenos", component: ContactenosComponent },
	{ path: "inicio", component: InicioComponent },
  { path: "login", component: LoginComponent },
	{ path: "ofertas", component: OfertasComponent },
  { path: "productos", component: ProductosComponent },
  { path: "productos-add", component: ProductosAddComponent },
  { path: "productos-cat/:categoria", component: ProductosCategoriaComponent },
  { path: "productos-edit/:id", component: ProductosEditComponent },
  { path: "productos-list", component: ProductosListComponent },
  { path: "quienesSomos", component: QuienesSomosComponent },
  { path: "registro", component: RegistroComponent },
  { path: "vender", component: VenderComponent },
	{ path: "**", pathMatch: "full", redirectTo: "inicio" },
];
