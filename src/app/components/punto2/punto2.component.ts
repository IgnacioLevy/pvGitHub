import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente: Asistente;

  asistentes: Array<Asistente>;


  constructor() {
    this.asistente=new Asistente();
    this.asistentes= new Array<Asistente>();
    this.asistente=new Asistente();
   }

  ngOnInit(): void {
  }
  public registrarAsistente(){
     this.asistentes.push(this.asistente);

  }

}
