import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet,  RouterLink} from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { CalculadoraComponent } from "./components/calculadora/calculadora.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavComponent, InicioComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
