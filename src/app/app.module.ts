import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


//component

import { HomeComponent } from "./home/home.component";
import { TableroComponent } from "./Tablero/tablero.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AlertaxComponent } from "./alertax/alertax.component";
import { AlertaoComponent } from "./alertao/alertao.component";
import { EmpatadosComponent } from "./empatados/empatados.component";
import { IAComponent } from "./ia/ia.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TableroComponent,
        InicioComponent,
        AlertaxComponent,
        AlertaoComponent,
        EmpatadosComponent,
        IAComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
