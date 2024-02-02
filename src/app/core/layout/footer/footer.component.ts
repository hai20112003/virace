import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ite-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  showModal: boolean = false;
  public submitted = false;
  public form: FormGroup;
  constructor(public fb: FormBuilder) {}
  emailRegex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern(this.emailRegex)]],
      content: ["", Validators.required],
    });
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
  onSubmit() {
    this.submitted = true;
  }
  get f() {
    return this.form?.controls;
  }


}
