import { Component } from '@angular/core';
import { AdminRoutingModule } from "../../admin/admin-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [AdminRoutingModule,RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {


  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  
}
