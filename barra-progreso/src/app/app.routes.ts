import { Routes } from '@angular/router';
import { CustomProgressBar } from './components/custom-progress-bar/custom-progress-bar.component';

export const routes: Routes = [
  { path: 'progress', component: CustomProgressBar },
  { path: '', pathMatch: 'full', redirectTo: '/progress' },
];
