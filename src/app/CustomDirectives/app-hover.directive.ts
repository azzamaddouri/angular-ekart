import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element : ElementRef,private renderer : Renderer2) { }
  //Binding any DOM Object property
@HostBinding('style.backgroundColor')backgroundColor : string ='28282B';
@HostBinding('style.border')border : string ='none';
@HostBinding('style.color')textStyle : string ='white';
@HostListener('mouseenter')onMouseEnter(){
this.backgroundColor='white';
this.textStyle='#282828';
this.border='#28282B 2px solid'
}
@HostListener('mouseout')onMouseOut(){
  this.backgroundColor= '#282828';
  this.textStyle= 'white';
  this.border='none'
  }
}
