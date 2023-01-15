import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent {
  // public variables

  public showCode: boolean = false;

  public games = [
    {
      id: 1,
      name: 'The Legend of Zelda',
      console: 'Nintendo',
      releaseDate: 1986,
      available: 'unavailable',
    },
    {
      id: 2,
      name: 'Zelda A Link to the Past',
      console: 'Super Nintendo',
      releaseDate: 1991,
      available: 'available',
    },
    {
      id: 3,
      name: 'Zelda Ocarina of Time',
      console: 'N64',
      releaseDate: 1998,
      available: 'available',
    },
  ];

  public getCode() {
    this.showCode = true;
  }

  public closeCode() {
    this.showCode = false;
  }
}
