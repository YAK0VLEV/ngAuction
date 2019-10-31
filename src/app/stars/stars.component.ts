import { Component, Input, OnInit } from '@angular/core';

/**
 * An implementation of the product stars.
 */
@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  /**
   * Represents a number of stars, can be changed by providing a value from 
   * the parent component. Otherwise, five stars will be rendered by default.
   */
  @Input() private count: number = 5;
  /**
   * Represents a given rating for a product providing by the parent component.
   * Stores the average product rating that determines how many stars should be 
   * filled with color.
   */
  @Input() private rating: number = 0;
  /**
   * Represents an array of stars. True is a colored star.
   */
  private stars: boolean[] = [];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
