import { Component, OnInit } from '@angular/core';
import { Exam } from './exam';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})

export class ExamComponent implements OnInit {
   diem: number = 0;
   made: number = 0;
   xeploai: string = '';
   caudung: number = 0;
   socau: number = 0;
   show: boolean = false;
   showe: boolean = true;
   pageTitle = '';
   examSubjects: Exam[] = [];
   examSubject: Exam = {
    Id: null,
    Text: null,
    Marks: null,
    AnswerId: null,
    Answers: [
      {
        Id: null,
        Text: null,
        Completed: null
      }
    ]
  };
subjectId = {
  Id: 'WEBU',
  Name: 'Xây dựng trang web',
  Logo: 'WEBU.jpg'
};
listsubjectId = [{
      Id: 'WEBU',
      Name: 'Xây dựng trang web',
      Logo: 'WEBU.jpg'
    },
    {
      Id: 'DBBS',
      Name: 'Cơ Sở Dữ Liệu',
      Logo: 'DBBS.png'
    },
    {
      Id: 'ASNE',
      Name: 'Thiết kế giao diện trên Android',
      Logo: 'ASNE.png'
    },
    {
      Id: 'DBAV',
      Name: 'SQL Server',
      Logo: 'DBAV.png'
    },
    {
      Id: 'ADAV',
      Name: 'Lập trình Android nâng cao',
      Logo: 'ADAV.jpg'
    },
    {
      Id: 'ADBS',
      Name: 'Lập trình Android cơ bản',
      Logo: 'ADBS.jpg'
    }
  ];
  private h: any = 1;
  private m: any = 0;
  private s: any = 0;
  index = 0;
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    const Id = this.route.snapshot.paramMap.get('examid');
    this.subjectId = this.listsubjectId.find(p => p.Id === Id);
    this.getExamSubject(this.subjectId.Id).subscribe(data => {
      this.examSubjects = data;
      this.examSubject = this.examSubjects[this.index];
    });
  }
  getExamSubject(Id: string) {
    return this.http.get<Exam[]>(`./assets/db/Quizs/${Id}.json`);
  }

  downExamSubject() {
    if (this.index > 0) {
      // this.checkAnswers = false
      //  this.index-=1;
      this.examSubject = this.examSubjects[--this.index];
    }
  }
  // chuyển tới câu khác
  upExamSubject() {
    if (this.index < this.examSubjects.length - 1) {
      // this.checkAnswers = true;
      // this.index+=1;
      this.examSubject = this.examSubjects[++this.index];
    } else {
    }
  }
  // sự kiên click vào radio
  radioChange(ask) {
    // check đã chọn
    this.examSubject.Answers.map(e => e.Id === ask.Id ? e.Completed = true : e.Completed = false);
  }
  Nopbai(id) {
    this.made += 1;
    if (this.examSubjects[this.index].AnswerId === id) {
      this.diem += 10 / this.examSubjects.length;
      this.caudung += 1;
    }
  }
  getDiem() {
    this.show = true;
    this.showe = false;
    if (this.diem < 5) {
      return this.xeploai = 'Rớt';
    } else {
      return this.xeploai = 'Đậu';
    }
  }
  onBack() {
    window.history.back();
  }
}
