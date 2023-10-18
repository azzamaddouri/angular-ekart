import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText:string="";
updateSearchText(event:any){
this.searchText=event.target.value;
}
@Output()
onSearchTextChanged : EventEmitter<string>=new EventEmitter<string>();
@Output()
searchTextChange : EventEmitter<string>=new EventEmitter<string>();
searchTextChanged(){
this.onSearchTextChanged.emit(this.searchText);
}
@ViewChild('searchInput')
searchInputEl : ElementRef;
setSearchText(/* inputEl : HTMLInputElement */){
  // Reference on DOM Element passed in argument
/*  this.searchText =inputEl.value;
   this.searchTextChange.emit(this.searchText); */
   // Reference on DOM Element without passing it in argument
   this.searchText=this.searchInputEl.nativeElement.value
   this.searchTextChange.emit(this.searchText);
}

}
