import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Ex1Component } from './components/exercises/ex-1/ex-1.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'ex-1',
        component: Ex1Component
    }
];
