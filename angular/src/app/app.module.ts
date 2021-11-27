import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/shared.module';
import { FooterComponent } from './modules/fortune-cookies/components/footer/footer.component';
import { HeaderComponent } from './modules/fortune-cookies/components/header/header.component';
import { MessageFooterComponent } from './modules/fortune-cookies/components/message-footer/message-footer.component';
import { MessageComponent } from './modules/fortune-cookies/components/message/message.component';
import { FortuneCookieComponent } from './modules/fortune-cookies/fortune-cookie.component';
import { FortuneCookieService } from './modules/fortune-cookies/services/fortune-cookie.service';
import { LanguageBanner } from './modules/translate/components/language-banner/language-banner.component';
import { LanguageModal } from './modules/translate/components/language-modal/language-modal.component';
import { TranslationService } from './modules/translate/services/translation.service';
import { TranslateComponent } from './modules/translate/translate.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient)
{
  return new TranslateHttpLoader(http,'assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FortuneCookieComponent,
    MessageComponent,
    MessageFooterComponent,
    FooterComponent,
    TranslateComponent,
    LanguageBanner,
    LanguageModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    FortuneCookieService,
    LanguageModal,
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
