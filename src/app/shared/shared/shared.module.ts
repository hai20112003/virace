import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from "ng-zorro-antd";

const MODULES = [
  CommonModule,
  FormsModule,
  NgZorroAntdModule,
  TranslateModule,
  ReactiveFormsModule 
];
@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [HttpClientModule, ...MODULES],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
