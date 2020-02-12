import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './components/products/products.component';
import {ProductsRoutingModule} from './products-routing.module';

import {SharedModule} from '../shared/shared.module';
import {ProductComponent} from '../components/product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [ProductsRoutingModule,
    CommonModule,
    SharedModule
  ]
})

export class ProductsModule {

}
