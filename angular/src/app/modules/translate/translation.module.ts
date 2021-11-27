import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageBanner } from './components/language-banner/language-banner.component';
import { FortuneCookieService } from '../fortune-cookies/services/fortune-cookie.service';
import { LanguageModal } from './components/language-modal/language-modal.component';
import { TranslateComponent } from './translate.component';



@NgModule({
  declarations: [
    LanguageBanner,
    LanguageModal,
    TranslateComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FortuneCookieService,
    TranslateComponent
  ]
})
export class TranslationModule { }
