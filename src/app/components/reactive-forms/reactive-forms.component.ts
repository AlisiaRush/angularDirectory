import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  public reactiveForm!: FormGroup;

  // public reactiveForm = this.fb.group({
  //   choices: this.fb.array([]),
  // });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
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
}
