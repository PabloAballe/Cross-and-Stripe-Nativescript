import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";



@Component({
    selector: "Inicio",
    moduleId: module.id,
    templateUrl: "./inicio.component.html",
    styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {

  constructor(private page: Page) {
      }

      ngOnInit(): void {
          this.page.actionBarHidden = true;
      }
  }
