import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { MessageFooterComponent } from './components/message-footer/message-footer.component';
import { FortuneCookieService } from './services/fortune-cookie.service';
import { FortuneCookiesApiService } from 'src/app/core/api/fortune-cookies.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateComponent } from '../translate/translate.component';



@NgModule({
  declarations: [
    MessageComponent,
    MessageFooterComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FortuneCookiesApiService,
    TranslateComponent
  ],
  providers: [
    FortuneCookieService
  ]
})
export class FortuneCookieModule { }
