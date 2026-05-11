import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './components/list/list';
import { Form } from './components/form/form';

const routes: Routes = [
     { path: '', component: List },
  { path: 'new', component: Form },
  { path: 'edit/:id', component: Form }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
