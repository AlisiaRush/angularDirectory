import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-value-patch-value',
  templateUrl: './set-value-patch-value.component.html',
  styleUrls: ['./set-value-patch-value.component.css'],
})
export class SetValuePatchValueComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public reactiveForm!: FormGroup;
  public formStatus: any;

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

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, [
          Validators.required,
          this.noSpaceAllowed,
        ]),
        lastname: new FormControl(null, [
          Validators.required,
          this.noSpaceAllowed,
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),

      gender: new FormControl('female'),
      country: new FormControl('tanzania'),
      hobbies: new FormControl(null),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
    // Value changes detected here on formGroup:
    this.reactiveForm.valueChanges.subscribe((val) => {
      console.log(val);
    });

    // Status Change.... valid, invalid, or pending...
    // If any formControls are valid or invalid... Status changes is triggered
    // IF all fields are filled out properly, you will see VALID
    this.reactiveForm.statusChanges.subscribe((val) => {
      console.log(val);
      this.formStatus = val;
    });

    // SET VALUE
    // Need exact values
    // setTimeout(() => {
    //   this.reactiveForm.setValue({
    //     personalDetails: {
    //       firstname: '',
    //       lastname: '',
    //       email: 'abc@example.com',
    //     },
    //     gender: '',
    //     country: '',
    //     hobbies: '',
    //     skills: [],
    //   });
    // }, 4000);

    // If you only want specific fields, use patchValue
    // Don't need exact values

    setTimeout(() => {
      this.reactiveForm.patchValue({
        personalDetails: {
          email: 'abc@example.com',
        },
      });
    }, 4000);
  }

  get skillsFormArray() {
    return this.reactiveForm.get('skills') as FormArray;
  }

  public onSubmit2() {
    // Reset a reactive form with values set. If you want them all cleared out use:
    // this.reatviceForm.reset(); without out the object as a parameter.
    this.reactiveForm.reset({
      personalDetails: {
        firstname: '',
        lastname: '',
        email: 'abc@example.com',
      },
      gender: 'female',
      country: 'tanzania',
      hobbies: '',
      skills: [],
    });
    console.log(this.reactiveForm);
  }

  public addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  // Custom Validator
  public noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    } else {
      return null;
    }
  }

  // ASYNC Validation
  public emailNotAllowed(control: any): Promise<any> | Observable<any> {
    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'alisiarush1@gmail.com') {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return response;
  }
}
