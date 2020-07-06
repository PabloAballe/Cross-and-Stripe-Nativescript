import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { HomeComponent } from "../home/home.component";
import {TableroComponent} from "../Tablero/tablero.component";
import {InicioComponent} from "../inicio/inicio.component";
import { Page } from "tns-core-modules/ui/page";
import {Router} from "@angular/router";

@Component({
    selector: "Alertax",
    templateUrl: "./alertax.component.html",
    styleUrls: ["./alertax.component.css"]

})
export class AlertaxComponent implements OnInit {

  constructor(private page: Page, private routerExtensions: RouterExtensions) {
  }
jugar(){
  this.routerExtensions.navigate(["tablero"]);
}

    goBack(): void {
            this.routerExtensions.back();
        }
    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}
