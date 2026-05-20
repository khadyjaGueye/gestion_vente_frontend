import { Component } from '@angular/core';
import { AdminRoutingModule } from "../../admin/admin-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [AdminRoutingModule, RouterLink],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {

  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
