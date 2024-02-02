import { Injectable } from "@angular/core";
import { LocalStorageType } from "../constants/local-constant.constants";

@Injectable({ providedIn: "root" })
export class AuthenticationAndAuthorizationService {
  constructor(
  ) {
  
  }

  public getCurrentLang(): string {
    return localStorage.getItem(LocalStorageType.CurrentLanguage)
      ? localStorage.getItem(LocalStorageType.CurrentLanguage)
      : "vi";
  }
}
