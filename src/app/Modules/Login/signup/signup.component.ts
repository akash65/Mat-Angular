import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
<<<<<<< HEAD
  constructor(private fb: FormBuilder) { }
=======
  constructor() { }
>>>>>>> origin/master

  ngOnInit() {
    // this.registergroup();
  }

<<<<<<< HEAD
  registergroup() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  signup() {
    
=======
  // registergroup() {
  //   this.registerForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', Validators.email],
  //     password: ['', Validators.required]
  //   });
  // }

  signup() {

>>>>>>> origin/master
  }
}
