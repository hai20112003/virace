import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AppRoutingModule } from "./core/app/app-routing.module";
import { AppComponent } from "./core/app/app.component";
import { LANGUAGE_FILE } from "./core/constants/language.constant";
import { CoreModule } from "./core/core.module";
import { MultiTranslateHttpLoader } from "./core/services/multi-language";
import { SharedModule } from "./shared/shared/shared.module";
import { WebModule } from "./web/web.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    WebModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createmMultiTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createmMultiTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, LANGUAGE_FILE);
}
