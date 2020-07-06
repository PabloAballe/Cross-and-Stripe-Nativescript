import { Component, OnInit } from "@angular/core";
import {TableroComponent} from "../Tablero/tablero.component";
import {InicioComponent} from "../inicio/inicio.component";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]

})
export class HomeComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
    }

    goBack(): void {
            this.routerExtensions.back();
        }
    ngOnInit(): void {
        // Init your component properties here.
    }
}
