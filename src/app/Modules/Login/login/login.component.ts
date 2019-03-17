import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userName: string;
  password: string;
  result: any;
  constructor( private router: Router, private httpservice: AppService) { }

  ngOnInit() {
    // this.loginGroup();
    // this.signupGroup();
  }

  // loginGroup() {
  //   this.loginForm = this.fb.group({
  //     userName: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  login(): void {
    this.result = {userName: 'demo', password: 'demo'};
    localStorage.setItem('result', JSON.stringify(this.result));
  }
  // login(userName, password) {
  //   this.result = this.httpservice.loginCheck(userName, password);
  //   console.log(this.result);
  //   if (this.result === true) {
  //    this.router.navigate(['customers']);
  //   } else {
  //       alert('Invalid credentials');

  //   }
  // }

}
