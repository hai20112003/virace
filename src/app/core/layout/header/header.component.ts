import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { langSettings } from "../../constants/common.const";
import { LocalStorageType } from "../../constants/local-constant.constants";
import { AuthenticationAndAuthorizationService } from "../../services/authentification-and-authorization.service";
import { Router } from "@angular/router";
import { Menu } from "../../constants/menu";
@Component({
  selector: "ite-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public langCode = "vi";
  public openMenu: boolean = false;
  public langSetting = langSettings;
  public flag: string;
  public openedSubMenu: null;
  public langName: string;
  public menuHas = Menu;
  pathSegment: string;
  isMenuVisible = false;
  showModal: boolean = false;
  constructor(
    public translate: TranslateService,
    public authService: AuthenticationAndAuthorizationService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
  }
  isActive(menuItem: any): boolean {
    const currentSegment = this.router.url.split("/")[1];
    const isMainMenuItemActive =
      menuItem.url && menuItem.url === `/${currentSegment}`;
    const isSubMenuItemActive =
      menuItem.subMenu &&
      menuItem.subMenu.some((subItem) => subItem.url === `/${currentSegment}`);
    return isMainMenuItemActive || isSubMenuItemActive;
  }

  ngOnInit(): void {
    this.flag = this.getLangSetting(this.authService.getCurrentLang()).flag;
    this.langName = this.getLangSetting(
      this.authService.getCurrentLang()
    ).lang_name;
  }
  changeLang(lang: string) {
    this.langCode = lang;
    this.flag = this.getLangSetting(this.langCode).flag;
    this.langName = this.getLangSetting(this.langCode).lang_name;
    this.translate.use(lang);
    localStorage.setItem(LocalStorageType.CurrentLanguage, this.langCode);
    this.toggleModal();
  }

  public getLangSetting(langCode: string): any {
    if (langCode === "vi") {
      return this.langSetting[0];
    } else {
      return this.langSetting[1];
    }
  }
  public openMenuFalse(): void {
    this.openMenu = false;
  }
  public openMenuTrue(): void {
    this.openMenu = true;
    this.cdr.detectChanges();
  }
  openSubMenuIndices: (number | null)[] = new Array(this.menuHas.length).fill(
    null
  );

  isSubMenuOpen(index: number): boolean {
    return this.openSubMenuIndices[index] !== null;
  }

  toggleSubMenu(index: number): void {
    if (this.openSubMenuIndices[index] === null) {
      this.openSubMenuIndices[index] = index;
    } else {
      this.openSubMenuIndices[index] = null;
    }
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }

  closeModal(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.showModal = false;
    }
  }
}
