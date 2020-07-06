import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { InicioComponent } from "./inicio/inicio.component";
import { TableroComponent } from "./Tablero/tablero.component";
import { AlertaxComponent } from "./alertax/alertax.component";
import { AlertaoComponent } from "./alertao/alertao.component";
import { EmpatadosComponent } from "./empatados/empatados.component";
import { IAComponent } from "./ia/ia.component";

const routes: Routes = [
    { path: "", redirectTo: "/inicio", pathMatch: "full" },
    { path: "tablero", component: TableroComponent },
    { path: "inicio", component: InicioComponent },
    { path: "alertax", component: AlertaxComponent },
    { path: "alertao", component: AlertaoComponent },
    { path: "empatados", component: EmpatadosComponent },
      { path: "ia", component: IAComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
