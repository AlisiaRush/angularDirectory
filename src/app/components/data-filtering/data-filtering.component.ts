import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-data-filtering',
  templateUrl: './data-filtering.component.html',
  styleUrls: ['./data-filtering.component.css'],
})
export class DataFilteringComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  // Public Variables
  public students: any;
  public _filterText: string = '';
  public filterStudents!: Student[];

  // USING ASYNC PIPE

  public totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filterStudents.length);
    }, 2000);
  });

  // NG METHODS

  // getter and setter

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filterStudents = this.filterStudentByGender(value);
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

    this.filterStudents = this.filterStudentByGender(this._filterText);
  }

  ChangeGender() {
    let studentCopy: any = Object.assign([], this.students);
    studentCopy[0].gender = 'Female';
    this.students = studentCopy;

    this.filterStudents = this.filterStudentByGender(this._filterText);
  }

  filterStudentByGender(filterTerm: string) {
    if (this.students.length === 0 || this.filterText === '') {
      return this.students;
    } else {
      return this.students.filter((student: any) => {
        return student.gender.toLowerCase() === filterTerm.toLowerCase();
      });
    }
  }

  ngOnInit() {
    this.students = this.studentService.students;
    this.filterStudents = this.students;
  }
}
