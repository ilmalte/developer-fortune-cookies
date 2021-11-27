import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fortune-cookie-message-footer',
  templateUrl: './message-footer.component.html',
  styleUrls: ['./message-footer.component.scss']
})
export class MessageFooterComponent implements OnInit {

  @Output() exportFortuneCookie = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {}

  export(): void{
    this.exportFortuneCookie.emit(true);
  }

}
