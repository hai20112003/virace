import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ite-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isChecked: boolean = false;
  public submitted = false;
  public formLogin: FormGroup;
  emailRegex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ["", Validators.required],
      remember_me: [""],
    });
  }
  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  clickIsChecked(): void {
    this.isChecked = !this.isChecked;
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
