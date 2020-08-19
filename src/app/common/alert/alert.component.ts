import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() onCloseAlert = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeAlert() {
    this.onCloseAlert.emit(true);
  }
}
