import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageType } from '../constants/local-constant.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "vi"]);

    const lang = localStorage.getItem(LocalStorageType.CurrentLanguage)
      ? localStorage.getItem(LocalStorageType.CurrentLanguage)
      : "vi";
    translate.use(lang);
    translate.setDefaultLang(lang);
  }

  public doBeforeUnload(): void {
    this.detectRefresh();
  }
  detectRefresh() {
    if (performance.navigation.type === 1) {
      return true;
    } else {
      return false;
    }
  }
}
