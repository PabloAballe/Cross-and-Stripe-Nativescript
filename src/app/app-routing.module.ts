import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {HomeComponent} from "./home/home.component";
import {InicioComponent} from "./inicio/inicio.component"

const routes: Routes = [
    { path: "", redirectTo: "/inicio", pathMatch: "full" },
    {path: "home", component: HomeComponent},
    {path: "inicio",component: InicioComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
