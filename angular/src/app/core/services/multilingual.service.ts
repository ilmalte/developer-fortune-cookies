import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from './session.service';
import { Translation } from '../models/translations.enum';
import LocaleCode from 'locale-code';
import { UtilitiesService } from './utilities.service';
import { ILanguage } from 'src/app/core/models/language';

@Injectable({
  providedIn: 'root'
})
export class MultilingualService {

  constructor(private translateService: TranslateService, private session: SessionService, private utilities: UtilitiesService) {
    this.translateService.use(LocaleCode.getLanguageCode(navigator.language) ?? 'en');
  }

  changeLanguage(languageCode: string): boolean {
    this.session.setItem('locale', languageCode);
    this.translateService.use(languageCode);
    return true;
  }

  currentLanguageCode(): string {
    return this.session.getItem('locale') ?? 'en';
  }

  currentLanguage(): string {
    return this.utilities.enumKeys(Translation).filter(x => {
        return Translation[x] == this.currentLanguageCode();
      }).toString();
  }

  loadDefaultLanguage(): void {
    let defaultLanguage = this.currentLanguageCode();
    this.translateService.use(defaultLanguage);
  }

  getLanguages(): ILanguage[] {
    let languages: ILanguage[] = [];
    for (let translation in Translation) {
      let language: ILanguage = {
        name: translation,
        code: Translation[translation as keyof typeof Translation]
      }
      languages.push(language);
    }
    return languages;
  }

  getFlagEmoji(languageCode: string) {
    let countryCode = this.getCountriesFromLocale(languageCode)[0];
    return countryCode.toUpperCase().replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
  }

  getCountriesFromLocale(languageCode: string): string[]{
    // TODO (translation): Convert locale to country code
    let countries: string[] = [];
    countries.push(languageCode);
    return countries;
  }

}
