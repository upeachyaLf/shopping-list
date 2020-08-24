import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() checked: boolean;
  @Output() onChange = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  handleChange(event: Event) {
    this.onChange.emit(event);
  }
}
