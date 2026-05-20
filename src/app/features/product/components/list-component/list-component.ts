import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../cart/services/cart-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-component',
  imports: [CommonModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {

  products = [
    {
      title: 'T-shirt Cool',
      description: 'Un T-shirt qui claque, à porter partout.',
      price: 2000,
      tag: 'Nouveau',
      image: 'assets/img/1.jpeg'
    },
    {
      title: 'Casque Audio',
      description: 'Son exceptionnel, confort au rendez-vous.',
      price: 1500,
      tag: 'Populaire',
      image: 'assets/img/2.jpeg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: 2500,
      tag: 'Best-seller',
      image: 'assets/img/3.jpeg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: 3000,
      tag: 'Best-seller',
      image: 'assets/img/4.jpeg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: '3000 CFA  ',
      tag: 'Best-seller',
      image: 'assets/img/5.jpeg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: 2000,
      tag: 'Best-seller',
      image: 'assets/img/6.jpeg'
    }
  ];

  constructor(private cartService: CartService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    Swal.fire({
      title: "Good job!",
      text: "Produit ajouté au panier",
      icon: "success"
    });
  }

}
