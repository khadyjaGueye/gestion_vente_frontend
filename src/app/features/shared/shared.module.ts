import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer-component/footer-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';


@NgModule({
  declarations: [],
  imports: [CommonModule,NavbarComponent, FooterComponent],
  exports: []
})
export class SharedModule {}
