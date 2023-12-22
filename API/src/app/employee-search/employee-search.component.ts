import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class SearchComponent{
  
  constructor(private router: Router) {}

  @Output() id_change = new EventEmitter<string | null>();
  id : string | null = '0';


  search(id_string: string): void {
    //Daten von einem eingabefeld sind immer ein string
    if(id_string.length === 0 || id_string === '0')
    {
      this.id = '0';
      this.id_change.emit('0');
      //this.router.navigateByUrl('/home/0');
      return;
    }

    this.id = id_string;
    this.id_change.emit(this.id);
  }
}
