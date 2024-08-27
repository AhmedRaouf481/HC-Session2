import { Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home1',
    component: Home1Component,
    title: 'Home 1',
  },
  {
    path: 'home2',
    loadComponent:()=> import('./home2/home2.component').then((m)=>m.Home2Component),
    title: 'Home 2'

  },

  { path: '**', redirectTo: 'home' },
];
