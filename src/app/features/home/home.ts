import { Component } from '@angular/core';
import { ListComponent } from '../product/components/list-component/list-component';
import { NavbarComponent } from "../../shared/navbar-component/navbar-component";
import { CommonModule } from '@angular/common';
import { Faq } from "../../shared/faq/faq";
import { Contact } from "../../shared/contact/contact";
import { FooterComponent } from "../shared/components/footer-component/footer-component";

@Component({
  selector: 'app-home',
  imports: [ListComponent, NavbarComponent, CommonModule, Faq, Contact, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

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
