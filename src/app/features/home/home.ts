import { Component } from '@angular/core';
import { ListComponent } from '../product/components/list-component/list-component';
import { NavbarComponent } from "../../shared/navbar-component/navbar-component";

@Component({
  selector: 'app-home',
  imports: [ListComponent, NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}
