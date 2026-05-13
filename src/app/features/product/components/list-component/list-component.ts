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
      image: 'assets/img/1.jpeg'
    },
    {
      title: 'Casque Audio',
      description: 'Son exceptionnel, confort au rendez-vous.',
      price: '49,99€',
      tag: 'Populaire',
      image: 'assets/img/2.jpeg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: '19,99€',
      tag: 'Best-seller',
      image: 'assets/img/3.jpeg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: '19,99€',
      tag: 'Best-seller',
      image: 'assets/img/4.jpeg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: '19,99€',
      tag: 'Best-seller',
      image: 'assets/img/5.jpeg'
    },
    {
      title: 'Mug Fun',
      description: 'Pour le café ou le thé, toujours stylé.',
      price: '19,99€',
      tag: 'Best-seller',
      image: 'assets/img/6.jpeg'
    }
    ];
}
