import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 0,
      title: 'Titulo de prueba',
      image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      price: 2000,
      description: 'Descripcion de la imagen'
    },
    {
      id: 1,
      title: 'Titulo de prueba',
      image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      price: 1000,
      description: 'Descripcion de la imagen'
    },
    {
      id: 2,
      title: 'Titulo de prueba',
      image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      price: 1000,
      description: 'Descripcion de la imagen'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log('Product');
    console.log(id);
  }
}
