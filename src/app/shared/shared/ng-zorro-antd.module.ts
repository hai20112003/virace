import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzModalModule } from "ng-zorro-antd/modal";

const NG_ZORRO_MODULES = [
  NzButtonModule,
  NzMenuModule,
  NzCarouselModule,
  NzIconModule,
  NzToolTipModule,
  NzModalModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...NG_ZORRO_MODULES],
  exports: [...NG_ZORRO_MODULES],
})
export class NgZorroAntdModule {}
