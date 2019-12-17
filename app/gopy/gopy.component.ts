import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gopy',
  templateUrl: './gopy.component.html',
  styleUrls: ['./gopy.component.css']
})
export class GopyComponent implements OnInit {
inf = {
  name: null,
  phone: '',
  email: null,
  gopy: null
};
isShow = false;
result = 'Góp ý thất bại!';
  constructor() { }

  ngOnInit() {
  }
onClick() {
  this.isShow = true;
  if (this.inf.name && this.inf.phone && this.inf.email && this.inf.gopy) {
    return this.result = ('Cảm ơn bạn đã góp ý cho chúng tôi !');
  } else {
    return this.result = 'Góp ý thất bại !';
  }
}
}
