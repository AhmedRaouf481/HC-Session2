import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent,
        title: 'Home',
        loadChildren: () => import('./home/home.routes').then(m => m.routes)
    },
    {
        path:'about',
        component: AboutComponent,
        title: 'About'
    },
    {
        path:'**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
