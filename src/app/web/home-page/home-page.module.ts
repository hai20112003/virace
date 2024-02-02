import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleConstants } from 'src/app/core/constants/title.constants';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HomePageComponent } from './home-page.component';


const routes: Routes = [
  {
    path: "",
    resolve: {},
    children: [
      {
        path: "",
        component: HomePageComponent,
        data: {
          title: TitleConstants.home,
        },
      },
    ],
  },
];
@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class HomePageModule { }
