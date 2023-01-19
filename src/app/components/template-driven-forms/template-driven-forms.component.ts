import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent {
  @ViewChild('myForm') form!: NgForm;
  @ViewChild('myForm2') form2!: NgForm;

  // public variables

  // FORM 1
  public defaultCountry = 'southAfrica';
  public firstName!: string;
  public lastName!: string;
  public defaultGender: string = 'Male';

  public gender = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
    { id: 3, value: 'Other' },
  ];

  // FORM 2
  public defaultCountry2 = 'India';
  public firstName2!: string;
  public lastName2!: string;

  // public methods

  public onSubmit() {
    console.log(this.form);
  }

  public onSubmit2() {
    console.log(this.form2);
  }
}
