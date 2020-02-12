import {Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy} from '@angular/core';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('1. constructor');
  }

  /*Captura cuando el componete cambió (implementacion de Angular)*/
/*  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChange');
    console.log(changes);
  }*/

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  /*Captura cuando el componente cambió (implementacion propia)*/
  ngDoCheck() {
    console.log('4. doCheck');
  }

  ngOnDestroy() {
    console.log('5. onDestroy');
  }
  addCart() {
    this.productClicked.emit(this.product.id);
    console.log('Agregar al carrito');
  }
}
