import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class SearchComponent{
  
  constructor() {}

  @Output() idEmit = new EventEmitter<string | null>();


  search(idString: string): void {
    //values from an input field will always be a string
    if(idString.length === 0)
    {
      this.idEmit.emit('0');
      return;
    }
    this.idEmit.emit(idString); //emits the id from the searchBox to home-page-component.tx
  }
}
