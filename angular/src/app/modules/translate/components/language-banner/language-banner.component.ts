import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MultilingualService } from 'src/app/core/services/multilingual.service';

@Component({
  selector: 'translate-language-banner',
  templateUrl: './language-banner.component.html',
  styleUrls: ['./language-banner.component.scss']
})
export class LanguageBanner implements OnInit {

  @Input() currentLanguage: string | null = null;
  @Output() openModal = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<boolean>();

  constructor(private translate: MultilingualService) { }

  ngOnInit(): void { }

  openLanguagesModal(): void {
    this.openModal.emit(true);
  }

  closeBanner(): void {
    this.closed.emit(true);
  }

  getTitle(): string {
    return `Don't you speak ${ this.currentLanguage }?`;
  }
  getText(): string {
    return `No problem, you can change your language settings!`;
  }
  getAction(): string {
    return `Change it!`;
  }
}
