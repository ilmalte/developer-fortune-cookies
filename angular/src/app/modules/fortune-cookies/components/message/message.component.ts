import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FortuneCookie } from '../../models/fortune-cookie';

@Component({
  selector: 'fortune-cookie-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() fortuneCookie: FortuneCookie | null = null;
  @Output() reloadFortuneCookie = new EventEmitter<boolean>();
  @Output() copyFortuneCookie = new EventEmitter<boolean>();
  @Output() exportFortuneCookie = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  reload(): void {
    this.reloadFortuneCookie.emit(true);
  }

  copy(): void {
    this.copyFortuneCookie.emit(true);
  }

  export(): void {
    this.exportFortuneCookie.emit(true);
  }

}
