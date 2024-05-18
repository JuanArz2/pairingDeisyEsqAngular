import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CalculadoraComponent } from "../calculadora/calculadora.component"

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, CalculadoraComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
  numero: number = 0;
  sumar(){
    this.numero = this.numero + 2
  }
  
  restar(){
    this.numero = this.numero - 2
  }
  
  //resultadoX: Number = 10;
}
