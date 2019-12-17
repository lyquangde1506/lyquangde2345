import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.css']
})
export class MonhocComponent implements OnInit {
  showForm: boolean = false;
  constructor() { }
  listsubjectId = [
    {
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
      Name: 'Active Server Pages',
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
  ngOnInit() {
  }
  show() {
    this.showForm = true;
  }
}
