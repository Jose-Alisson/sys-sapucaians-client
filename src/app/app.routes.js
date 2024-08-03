"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var menu_component_1 = require("./pages/menu/menu.component");
var cart_component_1 = require("./pages/cart/cart.component");
exports.routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'cart', component: cart_component_1.CartComponent }
];
