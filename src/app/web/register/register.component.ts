import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'ite-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public submitted = false;
  public formLogin: FormGroup;
  phoneRegex: RegExp =
    /^(?:(?:\+|0{0,2})84|0[3|5|7|8|9]|84)(?:\d{8}|(\d{7}))+$/;
  emailRegex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(this.emailRegex)]],
      lastName: ["", Validators.required],
      firstName: ["", Validators.required],
      phoneNumber: ["", [Validators.required,Validators.pattern(this.phoneRegex)] ],
      company: [""],
      presenter: [""],

    });
  }
  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onSubmit() {
    this.submitted = true;
    const form = this.formLogin.value;
    console.log(form);
    
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
  }
  get f() {
    return this.formLogin?.controls;
  }
}
