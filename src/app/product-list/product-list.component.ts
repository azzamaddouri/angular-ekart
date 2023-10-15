import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 product={
  name:'iPhone x',
price:789,
color:'Black',
discount:8.5,inStock:0
 } 
 getDiscountedPrice(){
  return this.product.price- this.product.discount*this.product.price/100;
 }

}
