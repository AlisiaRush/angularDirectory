import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  // Public Variables
  public enteredSearchValue: string = '';

  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();

  // public methods
  public onTextSearchChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
