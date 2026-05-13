import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { FormComponent } from './components/form-component/form-component';
import { ListComponent } from './components/list-component/list-component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormComponent,
    ListComponent
  ]
})
export class ProductModule { }
