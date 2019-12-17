import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { MonhocComponent } from './monhoc/monhoc.component';
import { HeaderComponent } from './header/header.component';
import { ExamComponent } from './exam/exam.component';
import { GopyComponent } from './gopy/gopy.component';
import { StudentComponent } from './student/student.component';
import { CountdownModule } from 'ngx-countdown';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    GioithieuComponent,
    LienheComponent,
    DangnhapComponent,
    MonhocComponent,
    HeaderComponent,
    ExamComponent,
    GopyComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountdownModule,
    RouterModule.forRoot([
      {path: 'dangnhap' , component: DangnhapComponent},
      {path: 'gioithieu' , component: GioithieuComponent},
      {path: 'lienhe' , component: LienheComponent},
      {path: 'monhoc' , component: MonhocComponent},
      {path: 'gopy' , component: GopyComponent},
      {path: 'exam/:examid' , component: ExamComponent},
      {path: '' , component: DangnhapComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
