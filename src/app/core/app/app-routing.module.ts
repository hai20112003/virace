import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () => import('src/app/web/web.module').then(m => m.WebModule),
    data: { preload: true },
    resolve: {},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
