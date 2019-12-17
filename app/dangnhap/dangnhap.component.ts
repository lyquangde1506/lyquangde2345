import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
constructor(private router: Router) { }
showForm = false;
user = {
  uname: null,
  password: null,
};
isShow = false;
result = 'Sai tài khoản hoặc mật khẩu';
submit(userForm) {
  this.isShow = true;
  if (this.user.uname === 'teonv' && this.user.password === '123') {
  this.router.navigate(['monhoc']);
} else {
  return this.result;
}
}
show() {
    this.showForm = true;
}
  ngOnInit() {
  }
}
