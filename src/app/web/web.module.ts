import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared/shared.module";
import { } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./home-page/home-page.module").then((m) => m.HomePageModule),
    data: { preload: true },
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
    data: { preload: true },
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterModule),
    data: { preload: true },
  },
  {
    path: "forgot_password",
    loadChildren: () =>
      import("./forgot-password/forgot-password.module").then((m) => m.ForgotPasswordModule),
    data: { preload: true },
  },
  {
    path: "change_password",
    loadChildren: () =>
      import("./change-password/change-password.module").then((m) => m.ChangePasswordModule),
    data: { preload: true },
  },
];

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class WebModule {}
