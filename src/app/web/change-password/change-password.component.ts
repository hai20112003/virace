import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

@Component({
  selector: 'ite-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public submitted = false;
  public formLogin: FormGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      password: ["", Validators.required],
      confirmPassword: ["", [Validators.required, this.matchPasswordValidator()]],
    });
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

  matchPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.root.get('password');
      const confirmPassword = control.value;
      if (password && confirmPassword !== password.value) {
        return { mismatch: true };
      }
      return null;
    };
  }
  get f() {
    return this.formLogin?.controls;
  }
}
