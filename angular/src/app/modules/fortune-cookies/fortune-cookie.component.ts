import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { TranslateComponent } from '../translate/translate.component';
import { FortuneCookie } from './models/fortune-cookie';
import { FortuneCookieService } from './services/fortune-cookie.service';

@Component({
  selector: 'app-fortune-cookie',
  templateUrl: './fortune-cookie.component.html',
  styleUrls: ['./fortune-cookie.component.scss']
})
export class FortuneCookieComponent implements OnInit {

  _fortuneCookie: FortuneCookie | null = null;
  fortuneCookies: FortuneCookie[] = [];

  @ViewChild('translateLanguage') translateLanguage = TranslateComponent;

  constructor(private fortuneCookie: FortuneCookieService) { }

  ngOnInit(): void {
    this.getFortuneCookies();
  }

  getFortuneCookies(): void {
    this.fortuneCookie.getAll().subscribe(
      (fortuneCookies: FortuneCookie[]) => { 
        this.fortuneCookies = fortuneCookies;
        this.getFortuneCookie();
      }
    )
  }

  getFortuneCookie(): void {
    this._fortuneCookie = this.fortuneCookie.getRandom(this.fortuneCookies);
  }

  export(): void {
    this.fortuneCookie.exportAsPicture();
  }

  copy(): void {
    this.fortuneCookie.copyToClipboard(this._fortuneCookie);
  }

}
