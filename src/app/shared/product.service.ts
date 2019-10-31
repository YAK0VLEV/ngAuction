import { Injectable } from '@angular/core';

/*
@Injectable({
  providedIn: 'root'
})
*/

// mockup data
const products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description': 'This is a short description: ... ',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 64.99,
    'rating': 3.5,
    'description': 'This is a short description: ... ',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Third Product',
    'price': 74.99,
    'rating': 4.2,
    'description': 'This is a short description: ... ',
    'categories': ['electronics']
  },
  {
    'id': 3,
    'title': 'Fourth Product',
    'price': 84.99,
    'rating': 3.9,
    'description': 'This is a short description: ... ',
    'categories': ['hardware']
  },
  {
    'id': 4,
    'title': 'Fifth Product',
    'price': 94.99,
    'rating': 2.9,
    'description': 'This is a short description: ... ',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 5,
    'title': 'Sixth Product',
    'price': 54.99,
    'rating': 4.6,
    'description': 'This is a short description: ... ',
    'categories': ['books']
  }
];

/**
 * The product representation.
 */
export class Product {
  constructor(
    /**
     * Represents the product ID.
     */
    public id: number,
    /**
     * Represents the product title.
     */
    public title: string,
    /**
     * Represents the product price.
     */
    public price: number,
    /**
     * Represents the product rating.
     */
    public rating: number,
    /**
     * Represents the product description.
     */
    public description: string,
    /**
     * Represents the product categories.
     */
    public categories: string[]
  ) { }
}

/**
 * The product service. ..... needs full description ......
 */
export class ProductService {

  constructor() { }

  /**
   * Returns existing products.
   *
   * @returns The product array.
   *
   * @alpha
   */
  getProducts(): Product[] {
    return products.map(product => new Product(
      product.id,
      product.title,
      product.price,
      product.rating,
      product.description,
      product.categories
    ));
  }

  /**
   * Returns a product object if matches the given product ID.
   *
   * @param productId - The product ID.
   * @returns The Product object.
   *
   * @alpha
   */
  getProductById(productId: number): Product {
    return products.find(product => product.id === productId);
  }
}
