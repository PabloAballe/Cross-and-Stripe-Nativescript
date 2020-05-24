
import { Component, OnInit } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";


@Component({
    selector: "Tablero",
    moduleId: module.id,
    templateUrl: "./tablero.component.html",
    styleUrls: ["./tablero.component.css"]
})
export class TableroComponent implements OnInit {

    constructor() {
    }
jugador="Jugador1";
jugador1="Jugador1";
jugador2="Jugador2";
marca="";
estado=true;
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

//funcion principal

cambiar(numero=0){

  this.estado=!this.estado
  if (this.estado==true){
    this.jugador=this.jugador1;


  }else{
    this.jugador=this.jugador2;


  }

if (this.jugador=="Jugador1"){
this.marca="X"

}else{
  this.marca="O"
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
  dialogs.alert({
      title: "Juego Finalizado",
      message: "El ganador es el Jugador 1",

  })
}
if(this.uno=="O" && this.dos=="O"&&this.tres=="O" || this.cuatro=="O"&& this.cinco=="O"&&this.seis=="O" || this.siete=="O"&&this.ocho=="O"&&this.nueve=="O" || this.uno=="O"&&this.cuatro=="O"&&this.siete=="O"||this.dos=="O"&&this.cinco=="O"&&this.ocho=="O"|| this.tres=="O"&&this.seis=="O"&&this.nueve=="O"|| this.uno=="O"&& this.cinco=="O"&& this.nueve=="O"|| this.tres=="O"&&this.cinco=="O"&&this.siete=="O"){
  dialogs.alert({
      title: "Juego Finalizado",
      message: "El ganador es el Jugador 2",

  })
}


}



ngOnInit(): void{


}



}
