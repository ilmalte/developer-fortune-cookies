import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FortuneCookiesApiService } from 'src/app/core/api/fortune-cookies.service';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { FortuneCookie } from '../models/fortune-cookie';

@Injectable()
export class FortuneCookieService {

  constructor(private api: FortuneCookiesApiService, private utilities: UtilitiesService){
  }

  getAll(): Observable<FortuneCookie[]> {
    return this.api.getAll().pipe(
      map((response: FortuneCookie[]) => response)
    );
  }
  
  getRandom(fortuneCookies: FortuneCookie[]): FortuneCookie {
    return fortuneCookies[this.utilities.getRandomIndex(fortuneCookies.length)];
  }
  
  exportAsPicture(){
    this.utilities.exportAsPicture('fortune-cookie', ['.message-icon-sm']);
  }

  copyToClipboard(fortuneCookie: FortuneCookie | null){
    if (fortuneCookie == null){
      return;
    }
    this.utilities.copyToClipboard(fortuneCookie.text + "\n " + fortuneCookie.author);
  }

}
