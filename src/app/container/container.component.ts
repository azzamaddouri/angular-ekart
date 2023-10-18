import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString:string[]=['Mark','Steve','Merry'];
  /* name="John Smith" */
  /* addToCart:number=0;
 product={
  name:'iPhone x',
price:789,
color:'Black',
discount:8.5,inStock:5,pImage:"/assets/images/14.jpg"
 } 
 getDiscountedPrice(){
  return this.product.price- this.product.discount*this.product.price/100;
 }
 decrementCartValue(){if (this.addToCart>0) {
  this.addToCart--;
 }
 
 }
 incrementCartValue(){
  if (this.addToCart<this.product.inStock) {
    this.addToCart++;
  }
 
 } */
 /* onNameChange(event:any){
  this.name=event.target.value;
  console.log(event.target.value);
 } */
 searchText:string="";
 setSearchText(value :string){
this.searchText=value;
 }
 @ViewChild(ProductListComponent/* 'productListComponent' */)
 prodcutListComponent:ProductListComponent;
}
