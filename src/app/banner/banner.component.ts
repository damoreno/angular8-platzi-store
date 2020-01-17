import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.images = this.productsService.getAllProducts().map((item) => item.image);
  }

}
