import { Routes } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { CalculadoraComponent } from "./components/calculadora/calculadora.component";

export const routes: Routes = [
    {path : 'inicio', component: InicioComponent, title: "Inicio"},
    {path : 'calculadora', component: CalculadoraComponent, title: "Calculadora"},
    {path: "", redirectTo: "inicio", pathMatch: "full"},

];
