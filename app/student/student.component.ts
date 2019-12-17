import { Component, OnInit } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  showFormEdit: boolean = true;
  selectStudentId = 1;
  formStudent = {
     id: 0,
    "username": '',
    "password": '',
    "fullname": '',
    "email": '',
    "gender": '',
    "birthday": new Date().toISOString().substring(0, 10),
    "schoolfee": '',
    "marks": 0
  };
  students: Student[] = [
    {
      id: 1,
      "username": "teonv",
      "password": "iloveyou",
      "fullname": "Nguyễn Văn Tèo",
      "email": "teonv@fpt.edu.vn",
      "gender": "Nam",
      "birthday": new Date(1993, 6, 23),
      "schoolfee": "1500000",
      "marks": 0
    },
    {
      id: 2,
      "username": "pheonv",
      "password": "iloveyou",
      "fullname": "Nguyễn Văn Chí Phèo",
      "email": "pheonv@fpt.edu.vn",
      "gender": "Nam",
      "birthday": new Date(1997, 7, 12),
      "schoolfee": "2500000",
      "marks": 0
    },
    {
      id: 3,
      "username": "nopt",
      "password": "iloveyou",
      "fullname": "Phạm Thị Nở",
      "email": "nopt@fpt.edu.vn",
      "gender": "Nữ",
      "birthday": new Date(1999, 9, 20),
      "schoolfee": "2000000",
      "marks": 0
    }
  ];
  constructor() { }

  ngOnInit() {
  }
addStudent() {
  this.formStudent.id = this.students.length + 1;
  this.students.push(Object.assign(this.formStudent));
  this.students = this.students;
  this.formStudent = {
    id: 0,
   "username": '',
   "password": '',
   "fullname": '',
   "email": '',
   "gender": '',
   "birthday": new Date().toISOString().substring(0, 10),
   "schoolfee": '',
   "marks": 0
 };
}
clear() {
  this.formStudent = {
    id: 0,
   "username": '',
   "password": '',
   "fullname": '',
   "email": '',
   "gender": '',
   "birthday": new Date().toISOString().substring(0, 10),
   "schoolfee": '',
   "marks": 0
 };
}
showEditStudent(student: Student) {
  this.showFormEdit = false;
  this.formStudent = {
    id: student.id,
    "username": student.username,
    "password": student.password,
    "fullname": student.fullname,
    "email": student.email,
    "gender": student.gender,
    "birthday": new Date().toISOString().substring(0, 10),
    "schoolfee": student.schoolfee,
    "marks": student.marks
  };
  this.selectStudentId = student.id;
}
saveEditStudent(studentId: number) {
  let index = this.students.indexOf(this.students.find(stu => stu.id === studentId));
  this.students[index] = Object.assign(this.formStudent);
  this.showFormEdit = true;
}
backEdit() {
  this.showFormEdit = true;
  this.formStudent = {
    id: 0,
   "username": '',
   "password": '',
   "fullname": '',
   "email": '',
   "gender": '',
   "birthday": new Date().toISOString().substring(0, 10),
   "schoolfee": '',
   "marks": 0
 };
}
deleteStudent(studentId: number) {
  this.students = this.students.filter(student => student.id !== studentId);
}
}
