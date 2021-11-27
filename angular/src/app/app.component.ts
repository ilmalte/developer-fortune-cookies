import { Component, OnInit } from '@angular/core';
import { MultilingualService } from './core/services/multilingual.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translationService: MultilingualService){}

  ngOnInit(): void {
    this.loadDefaults();
  }

  loadDefaults(): void {
    this.translationService.loadDefaultLanguage();
  }
  
}
