import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent {
  @ViewChild('myForm') form!: NgForm;

  // public variables

  public defaultCountry = 'southAfrica';
  public firstName!: string;
  public lastName!: string;
  // public methods

  public onSubmit() {
    console.log(this.form);
  }
}
