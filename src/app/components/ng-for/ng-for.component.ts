import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
  // public variables

  public showCode: boolean = false;

  public items = [
    {
      id: 1,
      name: 'Carrots',
      cost: 1.18,
      category: 'produce',
    },
    {
      id: 2,
      name: 'Orange Juice',
      cost: 2.32,
      category: 'beverage',
    },
    {
      id: 3,
      name: 'Frying Pan',
      cost: 15.35,
      category: 'cookware',
    },
  ];

  public getCode() {
    this.showCode = true;
  }

  public closeCode() {
    this.showCode = false;
  }
}
