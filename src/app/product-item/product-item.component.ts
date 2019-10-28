import { Component, Input } from '@angular/core';
import { Product } from '../shared/product.service';

@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  constructor() { }

  // this input property will receive the product from the parent component
  @Input() product: Product;

}
