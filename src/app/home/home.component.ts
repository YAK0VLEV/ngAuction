import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';

/**
 * The app home page.
 */
@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Represents an array of product objects.
   */
  private products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
