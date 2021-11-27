import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {

  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() params: any = null;
  @Input() action: string = '';
  @Output() confirmed = new EventEmitter<boolean>();
  @Output() dismissed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  confirm(): void {
    this.confirmed.emit(true);
  }
  dismiss() {
    this.dismissed.emit(true);
  }
}
