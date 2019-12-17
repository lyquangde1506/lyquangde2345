import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.css']
})
export class GioithieuComponent implements OnInit {
  showForm = false;
  constructor() { }

  ngOnInit() {
  }
show() {
  this.showForm = true;
}
}
