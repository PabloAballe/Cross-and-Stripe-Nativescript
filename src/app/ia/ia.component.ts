
import { Component, OnInit } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { AlertaxComponent } from "../alertax/alertax.component";
import { AlertaoComponent } from "../alertao/alertao.component";
import { EmpatadosComponent } from "../empatados/empatados.component";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "IA",
    moduleId: module.id,
    templateUrl: "./ia.component.html",
    styleUrls: ["./ia.component.css"]
})
export class IAComponent implements OnInit {

  constructor(private page: Page, private routerExtensions: RouterExtensions) {
 }

//puntuaciones
puntuacionx=0;
puntuaciono=0;
ronda=1;


 //globaales
 comienzo=true;
 jugador="";
 jugador1="X";
 jugador2="O";
 marca="";
 estado=false;
 ganador="";

 //casillas
 uno="";
 dos="";
 tres="";
 cuatro="";
 cinco="";
 seis="";
 siete="";
 ocho="";
 nueve="";

// ia
casilla=[1,2,3,4,5,6,7,8];
control=[1,2,3,4,5,6,7,8];




 //funciones de control para el juego
 control1=0;
 control2=0;
 control3=0;
 control4=0;
 control5=0;
 control6=0;
 control7=0;
 control8=0;
 control9=0;

 ngOnInit(): void {
        this.page.actionBarHidden = true;


    }



reiniciar(){
  //funciones de control para el juego
  this.control1=0;
  this.control2=0;
  this.control3=0;
  this.control4=0;
  this.control5=0;
  this.control6=0;
  this.control7=0;
  this.control8=0;
  this.control9=0;

  // ia
  this.casilla=[1,2,3,4,5,6,7,8];
  this.control=[1,2,3,4,5,6,7,8];



  //puntuaciones
  this.puntuacionx=0;
  this.puntuaciono=0;
  this.ronda=1;

//casillas
  this.uno="";
  this.dos="";
  this.tres="";
  this.cuatro="";
  this.cinco="";
  this.seis="";
  this.siete="";
  this.ocho="";
  this.nueve="";



  //globaales
  this.comienzo=true;
  this.jugador="";
  this.jugador1="X";
  this.jugador2="O";
  this.marca="";
  this.estado=false;
  this.ganador="";
}
limpiar(){
  //funciones de control para el juego
  this.control1=0;
  this.control2=0;
  this.control3=0;
  this.control4=0;
  this.control5=0;
  this.control6=0;
  this.control7=0;
  this.control8=0;
  this.control9=0;

  // ia
  this.casilla=[1,2,3,4,5,6,7,8];
  this.control=[1,2,3,4,5,6,7,8];


//casillas
  this.uno="";
  this.dos="";
  this.tres="";
  this.cuatro="";
  this.cinco="";
  this.seis="";
  this.siete="";
  this.ocho="";
  this.nueve="";


  //globales
  this.comienzo=true;
  this.jugador="";
  this.jugador1="X";
  this.jugador2="O";
  this.marca="";
  this.estado=false;
  this.ganador="";

}
alertax(){

    this.routerExtensions.navigate(["alertax"]);
}
alertao(){
    this.routerExtensions.navigate(["alertao"]);
}


//funcion principal

cambiar(numero=0){
  this.comienzo=false;

  if (this.estado==true){

    this.jugador=this.jugador2;



  }else{

    this.jugador=this.jugador1;



  }
  this.estado=!this.estado;
if (this.jugador=="X"){
this.marca="X"

}else{
  this.marca="O";


}

if (numero==1){
   this.uno = this.marca;
   this.control1=1;


}
else if(numero==2){
  this.dos=this.marca;
this.control2=1;

}
else if(numero==3){
  this.tres=this.marca;

this.control3=1;
}
else if(numero==4){
  this.cuatro=this.marca;
this.control4=1;

}
else if(numero==5){
  this.cinco=this.marca;
this.control5=1;

}
else if(numero==6){
  this.seis=this.marca;
this.control6=1;

}
else if(numero==7){
  this.siete=this.marca;

this.control7=1;
}
else if(numero==8){
  this.ocho=this.marca;

this.control8=1;
}
else if(numero==9){
  this.nueve=this.marca;
  this.control9=1;

}

if(this.uno=="X" && this.dos=="X"&&this.tres=="X" || this.cuatro=="X"&& this.cinco=="X"&&this.seis=="X" || this.siete=="X"&&this.ocho=="X"&&this.nueve=="X" || this.uno=="X"&&this.cuatro=="X"&&this.siete=="X"||this.dos=="X"&&this.cinco=="X"&&this.ocho=="X"|| this.tres=="X"&&this.seis=="X"&&this.nueve=="X"|| this.uno=="X"&& this.cinco=="X"&& this.nueve=="X"|| this.tres=="X"&&this.cinco=="X"&&this.siete=="X"){
  //this.routerExtensions.navigate(["alertax"]);
  this.puntuacionx=this.puntuacionx+1;
  this.ronda=this.ronda+1;
    this.limpiar();
}
if(this.uno=="O" && this.dos=="O"&&this.tres=="O" || this.cuatro=="O"&& this.cinco=="O"&&this.seis=="O" || this.siete=="O"&&this.ocho=="O"&&this.nueve=="O" || this.uno=="O"&&this.cuatro=="O"&&this.siete=="O"||this.dos=="O"&&this.cinco=="O"&&this.ocho=="O"|| this.tres=="O"&&this.seis=="O"&&this.nueve=="O"|| this.uno=="O"&& this.cinco=="O"&& this.nueve=="O"|| this.tres=="O"&&this.cinco=="O"&&this.siete=="O"){

  //this.routerExtensions.navigate(["alertao"]);
  this.puntuaciono=this.puntuaciono+1;
  this.ronda=this.ronda+1;
  this.limpiar();
}
if (
  this.control1==1&&
  this.control2==1&&
  this.control3==1&&
  this.control4==1&&
  this.control5==1&&
  this.control6==1&&
  this.control7==1&&
  this.control8==1&&
  this.control9==1&&this.ganador==""){
    this.ronda=this.ronda+1;
    this.limpiar();
  }
  if (this.ronda>3&&this.puntuacionx>this.puntuaciono){
    this.routerExtensions.navigate(["alertax"], { clearHistory: true });
  }
  if (this.ronda>3&&this.puntuaciono>this.puntuacionx){
    this.routerExtensions.navigate(["alertao"], { clearHistory: true });
  }
  else if (this.ronda>3&&this.puntuacionx==this.puntuaciono){

    this.routerExtensions.navigate(["empatados"], { clearHistory: true });
  }

if (this.comienzo==false&&this.estado==true){
  this.ia();
}

// revisar
  this.casilla.splice(numero, 1);
}

ia(){
  console.log("casilla antes de quitar elemetnos "+this.casilla);
    const ia= this.casilla[Math.floor(Math.random() * this.casilla.length)];

    console.log("numero a quitar "+ia)
    this.cambiar(ia-1);
    console.log("casilla despues elemetnos"+this.casilla);
}



}
