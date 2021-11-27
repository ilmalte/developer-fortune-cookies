import { Component, OnInit, ViewChild } from '@angular/core';
import { ILanguage } from 'src/app/core/models/language';
import { LanguageBanner } from './components/language-banner/language-banner.component';
import { LanguageModal } from './components/language-modal/language-modal.component';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'translate-language',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  // TODO (translation): set showBanner to true when translation feature is completed
  showBanner: boolean = false;
  showModal: boolean = false;

  translations: ILanguage[] = [];
  currentLanguage: string | null = null;

  @ViewChild('languageBanner') languageBanner = LanguageBanner;
  @ViewChild('languageModal') languageModal = LanguageModal;

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.loadTranslations();
    this.loadCurrentLanguage();
  }

  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.closeBanner();
    this.showModal = false;
  }
  loadTranslations() {
    this.translations = this.translationService.getTranslations();
  }

  openBanner() {
    this.showBanner = true;
  }
  closeBanner() {
    this.showBanner = false;
  }
  loadCurrentLanguage() {
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }

}
