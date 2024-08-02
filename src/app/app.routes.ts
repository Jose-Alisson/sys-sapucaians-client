import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full'},
    { path: 'menu', component: MenuComponent },
    { path: 'cart', component: CartComponent }
];
