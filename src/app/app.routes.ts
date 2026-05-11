import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [

      {
        path: '',
        component: Home
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth-module').then(m => m.AuthModule)
    },

     {
        path: 'product',
        loadChildren: () =>
            import('./features/product/product-module').then(m => m.ProductModule)
    },
];
