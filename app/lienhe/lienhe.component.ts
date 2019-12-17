import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css']
})
export class LienheComponent implements OnInit {
  inf = {
    name: null,
    phone: '',
    email: null,
    mess: null
  };
  isShow = false;
  result = 'Gửi tin nhắn thất bại!';
    constructor() { }
    ngOnInit() {
    }
  onClick() {
    this.isShow = true;
    if (this.inf.name && this.inf.phone && this.inf.email && this.inf.mess) {
      return this.result = ('Cảm ơn bạn đã nhắn tin cho chúng tôi !');
    } else {
      return this.result = 'Gửi tin nhắn thất bại !';
    }
  }

}
