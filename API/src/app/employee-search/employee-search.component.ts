import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class SearchComponent{
  
  constructor(private router: Router) {}

  @Output() id_emit = new EventEmitter<string | null>();


  search(id_string: string): void {
    //values from an input field will always be a string
    if(id_string.length === 0 || id_string === '0')
    {
      this.id_emit.emit('0');
      return;
    }
    this.id_emit.emit(id_string);
  }
}
