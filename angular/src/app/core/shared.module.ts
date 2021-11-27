import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FortuneCookiesApiService } from './api/fortune-cookies.service';
import { NotificationCardComponent } from './shared/components/notification-card/notification-card.component';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  providers: [
    FortuneCookiesApiService
  ],
  declarations: [
    NotificationCardComponent,
    ModalComponent
  ],
  imports: [
    TranslateModule
  ],
  exports: [
    NotificationCardComponent,
    ModalComponent
  ]
})
export class SharedModule {}
