import { Component, Input } from '@angular/core';
import { Product } from '../shared/product.service';

/**
 * A product Item.
 */
@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  /**
   * Represents a product object. This input property will receive the product 
   * from the parent component.
   */
  @Input() private product: Product;

  constructor() { }

}
