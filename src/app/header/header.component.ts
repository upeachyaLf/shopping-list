import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() linkSelected = new EventEmitter<{ selectedLink: string }>();

  @Input() activeLink: string;

  onNavLinkClick(selectedLink: string) {
    this.linkSelected.emit({
      selectedLink: selectedLink,
    });
  }
}
