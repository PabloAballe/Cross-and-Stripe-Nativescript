import { Component, OnInit } from "@angular/core";
import {TableroComponent} from "../Tablero/tablero.component";
import {InicioComponent} from "../inicio/inicio.component";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]

})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
