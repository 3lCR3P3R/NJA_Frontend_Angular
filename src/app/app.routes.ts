import { Routes } from "@angular/router";

import { ContactenosComponent } from "./components/contactenos/contactenos.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { OfertasComponent } from "./components/ofertas/ofertas.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { QuienesSomosComponent } from "./components/quienes-somos/quienes-somos.component";

export const RUTAS: Routes = [
  // { path: "", component: InicioComponent },
  { path: "contactenos", component: ContactenosComponent },
	{ path: "inicio", component: InicioComponent },
	{ path: "ofertas", component: OfertasComponent },
  { path: "quienesSomos", component: QuienesSomosComponent },
  { path: "productos", component: ProductosComponent },
	{ path: "**", pathMatch: "full", redirectTo: "inicio" },
];
