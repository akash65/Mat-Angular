import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';
import { AngularIndexedDB } from 'angular2-indexeddb';

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
  showSpinner: boolean;
  constructor( private router: Router, private fb: FormBuilder, private httpservice: AppService) {
    // this.indexdbFunc();
  }

  ngOnInit() {
    // this.loginGroup();
    // this.signupGroup();
  }

  // indexdbFunc() {
  //   const request = window.indexedDB.open('login', 2) ;
  //   const db = request.result;
  //    request.onsuccess = ((event) => {
  //      console.log(event);
  //    });
  //    const tx = db.transaction(['data', 'readwrite']);
  //    const objStore = tx.objectStore('customer');
  //    const objreq = objStore.add({userName: 'demo', password: 'demo'});
  //    objreq.onsuccess = ((event) => {
  //     console.log('data added', event);
  //    });
  // }



  loginDetails() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // loginGroup() {
  //   this.loginForm = this.fb.group({
  //     userName: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  onSubmit() {
    console.log(this.loginForm.value);
  }
  onLogin(): void {
    if (this.userName === 'demo' && this.password === 'demo') {
      this.router.navigate(['customers']);
    } else {
      alert('invalid credentials');
    }
  }

  onRegister() {
    this.router.navigate(['signup']);

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
