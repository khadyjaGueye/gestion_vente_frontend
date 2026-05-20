import { Component } from '@angular/core';
import { CartService } from '../../features/cart/services/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {

   constructor(public cartService: CartService) {}

}
