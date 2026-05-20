import { Component } from '@angular/core';
import { CartService } from '../services/cart-service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../../shared/navbar-component/navbar-component";


@Component({
  selector: 'app-cart-component',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent {


  constructor(public cartService: CartService) {}
}
