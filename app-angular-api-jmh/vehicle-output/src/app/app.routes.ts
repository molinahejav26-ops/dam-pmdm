import { Routes } from '@angular/router';
import { VehicleListPage } from './components/vehicle-list-component/vehicle-list-component';


export const routes: Routes = [
    {path: '', component: VehicleListPage},
    {path: '', pathMatch: 'full', redirectTo: '/vehicle-list'},
];
