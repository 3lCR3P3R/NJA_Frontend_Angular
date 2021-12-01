import { Routes } from "@angular/router";

import { ContactenosComponent } from "./components/contactenos/contactenos.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { OfertasComponent } from "./components/ofertas/ofertas.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { ProductosCategoriaComponent } from "./components/productos-categoria/productos-categoria.component";
import { QuienesSomosComponent } from "./components/quienes-somos/quienes-somos.component";

export const RUTAS: Routes = [
  // { path: "", component: InicioComponent },
  { path: "contactenos", component: ContactenosComponent },
	{ path: "inicio", component: InicioComponent },
	{ path: "ofertas", component: OfertasComponent },
  { path: "productos", component: ProductosComponent },
  { path: "productos-cat/:categoria", component: ProductosCategoriaComponent },
  { path: "quienesSomos", component: QuienesSomosComponent },
	{ path: "**", pathMatch: "full", redirectTo: "inicio" },
];
