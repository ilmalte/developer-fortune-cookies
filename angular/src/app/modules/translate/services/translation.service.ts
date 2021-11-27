import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MultilingualService } from 'src/app/core/services/multilingual.service';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { ILanguage } from '../../../core/models/language';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TranslationService {

  constructor(private utilities: UtilitiesService, private multilingual: MultilingualService) {
  }

  changeLanguage(languageCode: string): boolean {
    return this.multilingual.changeLanguage(languageCode);
  }

  getTranslations(): ILanguage[] {
    return this.multilingual.getLanguages();
  }

  getFlagEmoji(languageCode: string): string {
    return this.multilingual.getFlagEmoji(languageCode);
  }

  getCurrentLanguage(): string {
    return this.multilingual.currentLanguage();
  }

}
