import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { TitleConstants } from 'src/app/core/constants/title.constants';

const routes: Routes = [
  {
    path: "",
    resolve: {},
    children: [
      {
        path: "",
        component: ForgotPasswordComponent,
        data: {
          title: TitleConstants.forgot_password,
        },
      },
    ],
  },
];

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ForgotPasswordModule { }
