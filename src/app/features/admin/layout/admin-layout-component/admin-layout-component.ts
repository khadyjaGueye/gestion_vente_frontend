import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar-component/sidebar-component";
import { TopbarComponent } from "../topbar-component/topbar-component";
import { AdminRoutingModule } from "../../admin-routing-module";

@Component({
  selector: 'app-admin-layout-component',
  imports: [SidebarComponent, TopbarComponent, AdminRoutingModule],
  templateUrl: './admin-layout-component.html',
  styleUrl: './admin-layout-component.css',
})
export class AdminLayoutComponent {

}
