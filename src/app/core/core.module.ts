import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from '../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent, LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [AppComponent],
})
export class CoreModule { }
