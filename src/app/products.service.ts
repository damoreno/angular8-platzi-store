import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      title: 'Titulo de prueba',
      image: '../assets/images/banner-1.jpg',
      price: 2000,
      description: 'Descripcion de la imagen'
    },
    {
      id: '2',
      title: 'Titulo de prueba',
      image: '../assets/images/banner-2.jpg',
      price: 1000,
      description: 'Descripcion de la imagen'
    },
    {
      id: '3',
      title: 'Titulo de prueba',
      image: '../assets/images/banner-3.jpg',
      price: 1000,
      description: 'Descripcion de la imagen'
    },
    {
      id: '4',
      title: 'Titulo de prueba',
      image: '../assets/images/banner-4.jpg',
      price: 1000,
      description: 'Descripcion de la imagen'
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
