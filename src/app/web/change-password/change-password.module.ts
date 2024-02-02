import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { TitleConstants } from 'src/app/core/constants/title.constants';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';


const routes: Routes = [
  {
    path: "",
    resolve: {},
    children: [
      {
        path: "",
        component: ChangePasswordComponent,
        data: {
          title: TitleConstants.change_password
        },
      },
    ],
  },
];
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ChangePasswordModule { }
