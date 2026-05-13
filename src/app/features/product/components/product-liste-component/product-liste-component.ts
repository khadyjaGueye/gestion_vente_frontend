import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../model/data';

@Component({
  selector: 'app-product-liste-component',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './product-liste-component.html',
  styleUrl: './product-liste-component.css',
})
export class ProductListeComponent {
products: Product[] = [
    { id: 1, name: 'Produit A', description: 'Description A', price: 1000, image: 'assets/img/prodA.jpg' },
    { id: 2, name: 'Produit B', description: 'Description B', price: 2000, image: 'assets/img/prodB.jpg' },
    { id: 3, name: 'Produit C', description: 'Description C', price: 3000, image: 'assets/img/prodC.jpg' }
  ];
}
