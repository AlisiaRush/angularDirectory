import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-value-patch-value',
  templateUrl: './set-value-patch-value.component.html',
  styleUrls: ['./set-value-patch-value.component.css'],
})
export class SetValuePatchValueComponent {
  defaultCountry = 'india';

  firstname!: string;
  lastname!: string;
  email!: string;
  gen!: string;
  country!: string;
  hobbies!: boolean;

  defaultGender = 'Female';

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' },
  ];

  @ViewChild('myForm') form!: NgForm;

  onSubmit() {
    console.log(this.form);
    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;
    this.hobbies = this.form.value.hobbies;

    this.form.reset();
  }

  setDefaultValues() {
    // set value for all form controls in the form. If you don't want to use this. Use PatchValue
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com',
    //   },
    // });

    // Use Patch Value if you only want to update certain fields. Without affecting the other input values.
    this.form.form.patchValue({
      personDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'abc@example.com',
      },
    });
  }
}
