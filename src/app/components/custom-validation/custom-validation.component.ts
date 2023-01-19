import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css'],
})
export class CustomValidationComponent {
  public formStatus: any;
  public reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
        // email: new FormControl(
        //   null,
        //   [Validators.required, Validators.email],
        //   this.emailNotAllowed
        // ),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),

      gender: new FormControl('female'),
      country: new FormControl('tanzania'),
      hobbies: new FormControl(null),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });

    // Value changes detected here on formControl:
    // this.reactiveForm
    //   .get('personalDetails.firstname')
    //   ?.valueChanges.subscribe((val) => {
    //     console.log(val);
    //   });

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
  }

  get skillsFormArray() {
    return this.reactiveForm.get('skills') as FormArray;
  }

  public onSubmit() {
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
