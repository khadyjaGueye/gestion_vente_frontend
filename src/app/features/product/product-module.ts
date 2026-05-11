import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { Form } from './components/form/form';
import { List } from './components/list/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    Form,
    List
  ]
})
export class ProductModule { }
