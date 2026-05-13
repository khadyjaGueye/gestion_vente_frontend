import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
      price: '29,99€',
      tag: 'Nouveau',
      image: 'assets/images/tshirt.jpg'
    },
    {
      title: 'Casque Audio',
      description: 'Son exceptionnel, confort au rendez-vous.',
      price: '49,99€',
      tag: 'Populaire',
      image: 'assets/images/headphones.jpg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: '19,99€',
      tag: 'Best-seller',
      image: 'assets/images/mug.jpg'
    }
    ];
}
