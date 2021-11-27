import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILanguage } from '../../../../core/models/language';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'translate-language-modal',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.scss']
})
export class LanguageModal implements OnInit {

  @Input() translations: ILanguage[] = []
  @Output() closed = new EventEmitter<boolean>();
  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
  }

  close() {
    this.closed.emit(true);
  }

  selectLanguage(translation: ILanguage): void {
    this.translationService.changeLanguage(translation.code);
    this.close();
  }

  getFlagEmoji(languageCode: string): string {
    return this.translationService.getFlagEmoji(languageCode);
  }

}
