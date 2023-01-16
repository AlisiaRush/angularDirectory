import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css'],
})
export class CustomPipesComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  title = 'AngularPipes';
  students!: Student[];
  totalMarks!: number;
  _filterText: string = '';
  filteredStudents!: Student[];
  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length);
    }, 2000);
  });

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredStudents = this.filterStudentByGender(value);
  }

  ngOnInit() {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.filteredStudents = this.students;
  }

  AddDummyStudent() {
    //EXAMPLE OF PURE CHANGE
    let studentCopy = Object.assign([], this.students);
    studentCopy.push({
      name: 'TEST',
      course: 'TEST',
      marks: 520,
      DOB: new Date(),
      gender: 'Female',
    });
    this.students = studentCopy;

    //EXAMPLE OF IMPURE CHANGE
    // this.students.push({
    //   name: 'TEST',
    //   course: 'TEST',
    //   marks: 520,
    //   DOB: new Date(),
    //   gender: 'Female',
    // });
    // this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  ChangeGender() {
    // PURE CHANGE
    let studentCopy: any = Object.assign([], this.students);
    studentCopy[0].gender = 'Female';
    // studentCopy[0].gender = 'Female';
    this.students = studentCopy;

    //IMPURE CHANGE
    // this.students[0].gender = 'Female';
    // this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  onMouseMove() {}

  filterStudentByGender(filterTerm: string) {
    if (this.students.length === 0 || this.filterText === '') {
      return this.students;
    } else {
      return this.students.filter((student) => {
        return student.gender.toLowerCase() === filterTerm.toLowerCase();
      });
    }
  }
}
