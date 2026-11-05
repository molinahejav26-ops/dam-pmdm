import { Routes } from '@angular/router';
import { PersonajeListComponent } from './components/personaje-list-component/personaje-list-component';


export const routes: Routes = [
    {path: '', component: PersonajeListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/personaje-list'},
];
