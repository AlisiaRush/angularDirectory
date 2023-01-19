import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css'],
})
export class CustomValidationComponent {
  public reactiveForm!: FormGroup;

  // public reactiveForm = this.fb.group({
  //   choices: this.fb.array([]),
  // });

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
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),

      gender: new FormControl('female'),
      country: new FormControl('tanzania'),
      hobbies: new FormControl(null),
      skills: new FormArray([new FormControl(null, Validators.required)]),
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
}
