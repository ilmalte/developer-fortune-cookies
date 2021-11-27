import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FortuneCookie } from 'src/app/modules/fortune-cookies/models/fortune-cookie';
import { environment } from 'src/environments/environment';
import { MultilingualService } from '../services/multilingual.service';

@Injectable()
export class FortuneCookiesApiService {

  constructor(private http: HttpClient, private translate: MultilingualService) {
  }
  
  getAll(): Observable<FortuneCookie[]> {
    let languageCode =  this.translate.currentLanguageCode();
    let fileUrlSplitted: string[] = environment.fileUrl.split(".");
    fileUrlSplitted = fileUrlSplitted.map((elem) => "." + elem);
    fileUrlSplitted[0] = fileUrlSplitted[0].substring(1);
    
    fileUrlSplitted[4] = "." + languageCode;
    
    return this.http.get<FortuneCookie[]>(environment.fileUrl);
  }

}
