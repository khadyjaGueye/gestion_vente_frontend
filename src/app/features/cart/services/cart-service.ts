import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cartItems: any[] = [];

  constructor() { }

  // Ajouter produit
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  // Récupérer produits
  getCartItems() {
    return this.cartItems;
  }

  // Nombre total
  getCartCount() {
    return this.cartItems.length;
  }

  // TOTAL
 getTotalPrice() {
  return this.cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);
}

  // SUPPRIMER
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

}
