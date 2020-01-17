import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getAllProducts();
  }

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log('Product');
    console.log(id);
  }
}
