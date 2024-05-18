import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  
  /* @Output() */ resultadoHijo: number = 0;
  sumar(){
    this.resultadoHijo = this.resultadoHijo + 1
  }
  
  restar(){
    this.resultadoHijo = this.resultadoHijo - 1
  }


}
